CREATE DATABASE dtbs;

use dtbs;

CREATE TABLE todo
(
  id bigint NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
  due_time datetime NOT NULL,
  status varchar(255) NOT NULL,
  user_id bigint unsigned NOT NULL,
  CONSTRAINT t_id PRIMARY KEY (id),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE user
(
  id bigint NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
  CONSTRAINT pk_user PRIMARY KEY (id)
);
