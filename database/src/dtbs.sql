CREATE DATABASE dtbs;

use dtbs;

CREATE TABLE user
(
  id bigint NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  created_at datetime NOT NULL DEFAULT NOW(),
);
