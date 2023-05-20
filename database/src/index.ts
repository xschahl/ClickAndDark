import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'dtbs',
  port: 3306
});

app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/users', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Query the database to retrieve all users
    const query = 'SELECT * FROM user';
    const [rows] = await connection.query(query);

    // Send the retrieved users as a response
    res.status(200).json(rows);

    // Release the connection back to the pool
    connection.release();
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Query the database to check if the user exists
    const query = 'SELECT * FROM user WHERE email = ?';
    const [rows] = await connection.query(query, [email]);

    // Check if the user exists
    if (!Array.isArray(rows) || rows.length === 0) {
      res.status(401).json({ message: 'Invalid email' });
      return;
    }

    // Compare the password with the hashed password from the database
    const user: any = rows[0]; // Set the user object type as "any"
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // Check if the password matches
    if (!isPasswordMatch) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    // Authentication successful
    res.status(200).json({ message: 'Login successful' });

    // Release the connection back to the pool
    connection.release();
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  let username: string = req.query.username || req.body.username;
  let password: string = req.query.password || req.body.password;
  let email: string = req.query.email || req.body.email;

  try {
    // Get a connection
    const connection = await pool.getConnection();

    // Check if the email already exists
    const emailExistsQuery = 'SELECT * FROM user WHERE email = ?';
    const [existingUsers] = await connection.query(emailExistsQuery, [email]);
    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      res.status(409).json({ message: 'Email already exists' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user credentials into the database
    const insertQuery = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';
    await connection.query(insertQuery, [username, email, hashedPassword]);

    // Registration successful
    res.status(201).json({ message: 'Registration successful' });

    // Release the connection back to the pool
    connection.release();
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
