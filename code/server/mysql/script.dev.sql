-- supprimer la base de données si elle existe
-- ATTENTION uniquement en dévelopement
DROP DATABASE IF EXISTS za_nails_dev;

-- créer une base de données 
CREATE DATABASE za_nails_dev;

--  créer les tables
-- commencer par les tables n'ayant pas de clés étrangères
CREATE TABLE za_nails_dev.role(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL);

CREATE TABLE za_nails_dev.type(
    id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL);

CREATE TABLE za_nails_dev.user(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_number VARCHAR(10) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL, 
-- FK reprendre strictement le type de la PK
    role_id TINYINT(1) UNSIGNED,
-- la FK doit référencer la PK de la table jointe
    FOREIGN KEY (role_id) REFERENCES role(id));

CREATE TABLE za_nails_dev.commentary(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title TEXT(250) NOT NULL,
    description TEXT (500) NOT NULL,
    date DATE NOT NULL,
    user_id TINYINT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES role(id));

CREATE TABLE za_nails_dev.booking(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    type_id TINYINT(1) UNSIGNED,
    FOREIGN KEY (type_id) REFERENCES type(id));

CREATE TABLE za_nails_dev.model(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL, 
    image VARCHAR(100) NOT NULL);

CREATE TABLE za_nails_dev.type_model(
    type_id TINYINT(1) UNSIGNED,
    model_id TINYINT UNSIGNED,
    FOREIGN KEY (type_id) REFERENCES type(id),
    FOREIGN KEY (model_id) REFERENCES model(id),
    -- clé primaire composite 
    PRIMARY KEY (type_id, model_id));

-- vréer des enregistrements 
-- commencer par les tables n'ayant pas de clés étrangères
INSERT INTO za_nails_dev.role
VALUES 
-- pour la PK, utiliser NULL pour l'auto-incrémentation 
    (NULL, 'admin'),
    (NULL, 'user');

-- mdp : admin / user / user2
INSERT INTO za_nails_dev.user
VALUES
    (NULL,'Inès','Kezadri','inxsdk@gmail.com','0635784195','$argon2i$v=19$m=16,t=2,p=1$R2pyV3U3RUNoMlVFeEs1dw$sTwZiFOH5Q5L4DHn0eNwtA',1),
    (NULL, 'Linda','Florella','lindaflorella@gmail.com','0784596321','$argon2i$v=19$m=16,t=2,p=1$U3lsSXFCWXNNV0VOQ2czYQ$QSArdltwoAy+CidNTVQzsw',2),
    (NULL, 'Abdelhamid','Kezadri','a.kezadri@gmail.com','0789654123','$argon2i$v=19$m=16,t=2,p=1$WnlJdTVEbHRDaXJrTjFobw$FcggMJan/nAT/vwXodQpIg',2);

INSERT INTO za_nails_dev.commentary
VALUES
    (NULL, 'je sais pas','jadore la lean','2024-11-24', 1),
    (NULL, 'prout','linda je taime', '1996-12-28', 2);

INSERT INTO za_nails_dev.type
VALUES
    (NULL, 'capsule'),
    (NULL, 'ongles');


INSERT INTO za_nails_dev.booking
VALUES
    (NULL,'2025-12-04', 1),
    (NULL,'2024-05-20', 2);

INSERT INTO za_nails_dev.model
VALUES
    (NULL,'Juju','model1.jpg'),
    (NULL, 'Linda','model2.jpg'),
    (NULL,'Nita','model3.jpg');


-- -- modifier des enregistrements
-- -- UPDATE za_nails_dev.roles
-- -- -- SET = permet de cibler les colonnes à mettre à jour, et leurs affecter une nouvelle valeur
-- -- SET 
-- --     roles.name = 'linda'
-- -- -- WHERE = permet de créer une condition , cibler une colonne et une valeur
-- -- WHERE 
-- --     roles.id = 1;

-- -- -- supprimer un enregistrement 
-- -- DELETE FROM za_nails_dev.roles
-- -- WHERE 
-- --     roles.id = 3;

-- -- jointure avec une table de jointure 
