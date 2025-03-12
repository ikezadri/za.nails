-- selectonner des enregistrements 
-- choisir les colonnes à selectionner
--  * selectionner de toutes  les colonnes
-- SELECT 
--     booking.*
-- FROM
--     za_nails_dev.booking
-- -- WHERE permet de créer une condition pour récupérer des enregistrements
-- -- WHERE 
-- --     role.id = 1;
-- -- JOIN/INNER JOIN permet de cibler une table en relation 
-- JOIN    
--     za_nails_dev.booking
-- -- ON permet de relier uen clé étrangère à une clé primaire 
-- ON 
--     booking.id = types.booking_id

SELECT
    user.*
FROM 
    za_nails_dev.user
JOIN
    za_nails_dev.booking;
