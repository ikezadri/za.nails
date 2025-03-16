-- supprimer la base de données si elle existe
-- ATTENTION uniquement en dévelopement
DROP DATABASE IF EXISTS za_nails_dev;

-- créer une base de données 
CREATE DATABASE za_nails_dev;

--  créer les tables
-- commencer par les tables n'ayant pas de clés étrangères
CREATE TABLE za_nails_dev.roles(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL);

CREATE TABLE za_nails_dev.commentary(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title TEXT(250) NOT NULL,
    description TEXT (500) NOT NULL,
    name VARCHAR(50) NOT NULL, 
    date DATE NOT NULL);

CREATE TABLE za_nails_dev.types(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL, 
    types VARCHAR(50) NOT NULL);

CREATE TABLE za_nails_dev.user(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL UNIQUE,
    phonenumber VARCHAR(10) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL, 
-- FK reprendre strictement le type de la PK
    roles_id TINYINT(1) UNSIGNED,
-- la FK doit référencer la PK de la table jointe
    FOREIGN KEY (roles_id) REFERENCES roles(id));    

CREATE TABLE za_nails_dev.booking(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    types VARCHAR(50) NOT NULL, 
    types_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (types_id) REFERENCES types(id));

CREATE TABLE za_nails_dev.model(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL, 
    image VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    types_id TINYINT(1) UNSIGNED, 
    FOREIGN KEY (types_id) REFERENCES types(id));

CREATE TABLE za_nails_dev.type_model(
    types_id TINYINT(1) UNSIGNED,
    model_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (types_id) REFERENCES types(id),
    FOREIGN KEY (model_id) REFERENCES model(id),
    -- clé primaire composite 
    PRIMARY KEY (types_id, model_id));

-- vréer des enregistrements 
-- commencer par les tables n'ayant pas de clés étrangères
INSERT INTO za_nails_dev.roles
VALUES 
-- pour la PK, utiliser NULL pour l'auto-incrémentation 
    (NULL, 'titi'),
    (NULL, 'toto'),
    (NULL, 'tutu');

INSERT INTO za_nails_dev.commentary
VALUES
    (NULL, 'je sais pas','jadore la lean','kaaris','2024-11-24'),
    (NULL, 'prout','linda je taime','kalash criminel','1996-12-28');

INSERT INTO za_nails_dev.types
VALUES
    (NULL,'Mama Brigitte','capsule'),
    (NULL,'Baron Samedi','ongles');

INSERT INTO za_nails_dev.user
VALUES
    (NULL,'Inès','Kezadri','inxsdk@gmail.com','0635784195','thdrcg',1),
    (NULL, 'Linda','Florella','lindaflorella@gmail.com','0784596321','cozecvjz',2),
    (NULL, 'Abdelhamid','Kezadri','a.kezadri@gmail.com','0789654123','czfedcez',1);

INSERT INTO za_nails_dev.booking
VALUES
    (NULL,'2025-12-04','capsule',1),
    (NULL,'2024-05-20','ongles',2);

INSERT INTO za_nails_dev.model
VALUES
    (NULL,'Juju','image','capsule',1),
    (NULL, 'Linda','image','capsule',2),
    (NULL,'Nita','image','ongles',2);


-- modifier des enregistrements
-- UPDATE za_nails_dev.roles
-- -- SET = permet de cibler les colonnes à mettre à jour, et leurs affecter une nouvelle valeur
-- SET 
--     roles.name = 'linda'
-- -- WHERE = permet de créer une condition , cibler une colonne et une valeur
-- WHERE 
--     roles.id = 1;

-- -- supprimer un enregistrement 
-- DELETE FROM za_nails_dev.roles
-- WHERE 
--     roles.id = 3;

-- jointure avec une table de jointure 
