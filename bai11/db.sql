-- Create database 
-- CREATE DATABASE nameDatabase ; 
create database if not exists netflix 
-- users

create table users (
    id int auto_increment primary key, 
    userName varchar(50) not null,
    pass varchar(30) not null,
    email varchar(50),
    numberPhone varchar(10) 
);
-- films 
create table films (
    id int auto_increment primary key, --key
    name_film varchar(100),
    time_film int,
    release_year int,
    introduce varchar(255), 
    director_id int
);

-- table film-performers 
create table film_performers (
    id int auto_increment primary key,
    film_id int,
    performer_id int
);

-- table film-genre 
create table film_genre (
    id int auto_increment primary key,
    film_id int,
    genre_id int
);

-- director đạo diễn 
create table director (
    id int auto_increment primary key, --key
    name_director varchar(50)
);

-- genre thể loại 
create table genre (
    id int auto_increment primary key, --key
    name_genre varchar(100)
);

-- performers diễn viên 
create table performers (
    id int auto_increment primary key, --key
    name_performer varchar(50)
);

-- country quốc gia 
create table country (
    id int auto_increment primary key, --key
    name_country varchar(50)
);