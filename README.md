# ClickAndDark

## Github Actions
[![pipeline](https://github.com/xschahl/Epitech-JAM-19-05-23/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/xschahl/Epitech-JAM-19-05-23/actions/workflows/pipeline.yml)

## Docker Angular

Build docker image:
```
cd ./app
docker build . -t my-app
```

Run docker container:
```
sudo docker run -d -p 80:80 my-app
```

Access to angular application:
http://localhost:80

## Angular

Install depedencies:
```
cd ./app
npm install
```

Launch application:
```
ng serve --open
```

Access to angular application:
http://localhost:4200

## Database (Node TS)

Install depedencies:
```
cd ./database
npm install
```

Launch database
```
npm start
```

Access to database:
http://localhost:3000

## Docker phpMyAdmin

Install phpMyAdmin:
```
sudo docker pull phpmyadmin/phpmyadmin
```

Launch application:
```
cd ./database
docker-compose up
```

Access to phpMyAdmin:
http://localhost:8077
