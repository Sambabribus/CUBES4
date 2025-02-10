INSERT INTO suppliers (name, address, phone_number, mail, region, alcohol_provided) VALUES
     ('Domaine Tariquet', 'Château de Tariquet, 32800 Eauze', '0556261492', 'contact@tariquet.com', 'Gascogne', 'Vin blanc sec, Armagnac, Floc de Gascogne'),
     ('Plaimont Producteurs', 'Route de Saint-Mont, 32400 Saint-Mont', '0562696240', 'contact@plaimont.com', 'Gascogne', 'Saint Mont, Madiran, Pacherenc'),
     ('Domaine Haut-Marin', 'Route de Montréal, 32100 Gondrin', '0562689877', 'contact@haut-marin.com', 'Gascogne', 'Vin blanc sec, Vin rosé, Vin blanc doux'),
     ('Domaine Saint-Martin', 'Lieu-dit Saint-Martin, 32800 Eauze', '0556203030', 'info@saint-martin.com', 'Gascogne', 'Floc de Gascogne, Armagnac, Vin blanc moelleux'),
     ('Cave de Condom', '12 Rue de l’Abreuvoir, 32100 Condom', '0553626548', 'contact@cavecondom.com', 'Gascogne', 'Vin rouge, Vin rosé, Corolle'),
     ('Domaine de Magnaut', 'Domaine de Magnaut, 32100 Fourcès', '0553625400', 'info@domaine-magnaut.com', 'Gascogne', 'Armagnac, Vin blanc sec, Floc de Gascogne'),
     ('Domaine de Pellehaut', '32150 Montréal-du-Gers', '0562682922', 'contact@pellehaut.com', 'Gascogne', 'Vin rosé, Vin blanc sec, Vin rouge'),
     ('Domaine Uby', '32150 Cazaubon', '0556621243', 'contact@uby.fr', 'Gascogne', 'Vin blanc fruité, Vin rosé, Gros Manseng'),
     ('Domaine de Miselle', '32800 Cazaubon', '0558203268', 'info@miselle.com', 'Gascogne', 'Vin blanc sec, Vin blanc moelleux, Vin rosé'),
     ('Domaine de Laguille', 'Laguille, 32110 Lannepax', '0562062000', 'contact@laguille.com', 'Gascogne', 'Vin blanc, Vin rosé, Armagnac'),
     ('Château de Cassaigne', 'Château de Cassaigne, 32100 Cassaigne', '0553626048', 'info@chateau-cassaigne.com', 'Gascogne', 'Armagnac, Floc de Gascogne, Vin rouge'),
     ('Domaine de Joÿ', '32330 Panjas', '0562084195', 'contact@domaine-joy.com', 'Gascogne', 'Vin blanc sec, Armagnac, Vin blanc doux'),
     ('Domaine de Maubet', 'Domaine de Maubet, 32100 Courrensan', '0562681551', 'info@maubet.com', 'Gascogne', 'Vin blanc fruité, Vin rouge, Vin rosé'),
     ('Domaine de l\'Herré', 'Lieu-dit l\'Herré, 32800 Eauze', '0556204231', 'info@domaine-herre.com', 'Gascogne', 'Vin blanc sec, Vin rosé, Colombard'),
     ('Domaine Chiroulet', 'Domaine Chiroulet, 32330 Larroque-sur-l’Osse', '0552625969', 'contact@chiroulet.com', 'Gascogne', 'Vin rouge, Vin blanc sec, Vin rosé'),
     ('Les Vignobles Fontan', 'Les Vignobles Fontan, 32310 Manciet', '0562626602', 'contact@fontan.com', 'Gascogne', 'Vin bio blanc, Vin bio rouge, Floc de Gascogne'),
     ('Domaine des Cassagnoles', 'Domaine des Cassagnoles, 32800 Gondrin', '0562683061', 'info@cassagnoles.com', 'Gascogne', 'Vin blanc sec, Vin blanc moelleux, Vin rosé'),
     ('Domaine de Pouy', 'Domaine de Pouy, 32800 Eauze', '0556204417', 'info@pouy.com', 'Gascogne', 'Vin blanc sec, Vin blanc fruité, Vin rosé'),
     ('Domaine du Tariquet', 'Château de Tariquet, 32800 Eauze', '0556261492', 'contact@tariquet.com', 'Gascogne', 'Vin blanc sec, Armagnac, Floc de Gascogne'),
     ('Les Vignobles Brumont', 'Chemin de Montus, 65700 Castelnau-Rivière-Basse', '0562696472', 'contact@brumont.com', 'Sud-Ouest', 'Madiran, Pacherenc, Vin blanc sec');


INSERT INTO items (name, alcohol_type, domain_name, millesime, purchase_price, selling_price, stock_quantity, threshold_min, description, Id_suppliers)
VALUES
    ('Tariquet Classic', 'Vin blanc', 'Domaine Tariquet', '2022', 5.50, 8.90, 120, 10, 'Vin blanc sec frais et fruité.', 1),
    ('Saint Mont Tradition', 'Vin rouge', 'Plaimont Producteurs', '2021', 6.00, 9.90, 80, 10, 'Vin rouge charpenté typique du Sud-Ouest.', 2),
    ('Pacherenc Doux', 'Vin blanc', 'Plaimont Producteurs', '2020', 8.00, 14.90, 60, 10, 'Vin blanc moelleux aux arômes exotiques.', 2),
    ('Haut-Marin Colombard', 'Vin blanc', 'Domaine Haut-Marin', '2022', 4.50, 7.50, 100, 10, 'Vin blanc sec léger et rafraîchissant.', 3),
    ('Vin Rosé Prestige', 'Vin rosé', 'Domaine Haut-Marin', '2022', 5.00, 8.00, 90, 10, 'Vin rosé fruité parfait pour l\'été.', 3),
    ('Vin Blanc Moelleux', 'Vin blanc', 'Domaine Saint-Martin', '2022', 6.50, 10.50, 75, 10, 'Vin moelleux aux notes de fruits confits.', 4),
    ('Madiran Prestige', 'Vin rouge', 'Plaimont Producteurs', '2020', 9.00, 15.00, 40, 10, 'Vin rouge puissant et complexe.', 2),
    ('Vin Rosé Tradition', 'Vin rosé', 'Domaine de Pellehaut', '2022', 4.80, 7.90, 110, 10, 'Vin rosé gourmand aux notes de fruits rouges.', 7),
    ('Vin Blanc Sec', 'Vin blanc', 'Domaine de Pellehaut', '2021', 5.50, 8.50, 95, 10, 'Vin blanc vif et équilibré.', 7),
    ('Colombard-Gros Manseng', 'Vin blanc', 'Domaine Uby', '2022', 6.20, 9.90, 100, 10, 'Assemblage fruité et expressif.', 8),
    ('Côtes de Gascogne Rouge', 'Vin rouge', 'Domaine de Maubet', '2021', 5.00, 8.50, 85, 10, 'Vin rouge souple et agréable.', 12),
    ('Vin Blanc Sec Tradition', 'Vin blanc', 'Domaine des Cassagnoles', '2022', 5.00, 7.50, 120, 10, 'Vin blanc frais aux notes d\'agrumes.', 16),
    ('Colombard-Sauvignon', 'Vin blanc', 'Domaine de l\'Herré', '2022', 6.00, 9.50, 90, 10, 'Vin blanc au nez expressif et floral.', 17),
    ('Vin Rosé Signature', 'Vin rosé', 'Domaine Chiroulet', '2021', 5.50, 8.90, 75, 10, 'Vin rosé frais et fruité.', 18),
    ('Vin Bio Rouge', 'Vin rouge', 'Les Vignobles Fontan', '2021', 7.00, 12.00, 80, 10, 'Vin rouge biologique certifié AB.', 19),
    ('Pacherenc de Vic-Bilh', 'Vin blanc', 'Les Vignobles Brumont', '2019', 12.00, 19.00, 40, 10, 'Vin blanc doux et élégant.', 20),
    ('Tariquet Chardonnay', 'Vin blanc', 'Domaine Tariquet', '2022', 6.50, 9.90, 100, 10, 'Chardonnay frais aux notes de fruits tropicaux.', 1),
    ('Madiran Vieilles Vignes', 'Vin rouge', 'Plaimont Producteurs', '2019', 10.00, 16.90, 50, 10, 'Vin rouge complexe aux tannins soyeux.', 2),
    ('Saint Mont Blanc Sec', 'Vin blanc', 'Plaimont Producteurs', '2021', 5.50, 8.50, 120, 10, 'Vin blanc frais aux notes d\'agrumes.', 2),
    ('Vin Blanc Moelleux Signature', 'Vin blanc', 'Domaine Haut-Marin', '2021', 6.00, 10.00, 80, 10, 'Vin moelleux doux et équilibré.', 3),
    ('Vin Rosé Floral', 'Vin rosé', 'Domaine Haut-Marin', '2022', 4.90, 7.90, 90, 10, 'Vin rosé frais et floral.', 3),
    ('Côtes de Gascogne Blanc', 'Vin blanc', 'Domaine Saint-Martin', '2022', 5.90, 9.50, 85, 10, 'Vin blanc sec équilibré et aromatique.', 4),
    ('Magnaut Gros Manseng', 'Vin blanc', 'Domaine de Magnaut', '2022', 7.00, 11.50, 60, 10, 'Vin blanc fruité et rafraîchissant.', 6),
    ('Pellehaut Harmonie Rosé', 'Vin rosé', 'Domaine de Pellehaut', '2022', 5.20, 8.20, 110, 10, 'Vin rosé fruité et floral.', 7),
    ('Pellehaut Chardonnay', 'Vin blanc', 'Domaine de Pellehaut', '2021', 6.00, 9.50, 90, 10, 'Vin blanc sec aux notes beurrées.', 7),
    ('Uby Gros Manseng-Sauvignon', 'Vin blanc', 'Domaine Uby', '2022', 7.20, 10.90, 100, 10, 'Assemblage fruité et expressif.', 8),
    ('Maubet Rosé Prestige', 'Vin rosé', 'Domaine de Maubet', '2022', 5.00, 8.00, 100, 10, 'Vin rosé frais aux notes de fruits rouges.', 12),
    ('Cassagnoles Moelleux', 'Vin blanc', 'Domaine des Cassagnoles', '2021', 6.50, 10.00, 90, 10, 'Vin blanc doux et gourmand.', 16),
    ('L\'Herré Chardonnay', 'Vin blanc', 'Domaine de l\'Herré', '2022', 7.00, 11.50, 85, 10, 'Vin blanc structuré et rond.', 17),
    ('Chiroulet Rouge Classique', 'Vin rouge', 'Domaine Chiroulet', '2020', 8.00, 12.50, 70, 10, 'Vin rouge aux tanins soyeux.', 18),
    ('Fontan Bio Rosé', 'Vin rosé', 'Les Vignobles Fontan', '2022', 7.50, 12.00, 90, 10, 'Vin rosé biologique frais et fruité.', 19),
    ('Brumont Blanc Sec', 'Vin blanc', 'Les Vignobles Brumont', '2021', 14.00, 22.00, 50, 10, 'Vin blanc sec élégant et minéral.', 20);

INSERT INTO users (`first_name`, `last_name`, `mail`, `phone_number`, `username`, `password`, `birthday`, `address`, `gender`, `isAdmin`)
VALUES
    ('Marie', 'Dubois', 'marie.dubois@gmail.com', '0616378353', 'blandit', 'ipsum', '1975-05-30', '44 Rue Bonnet, Wattrelos, 59150', 'female', '0'),
    ('Jean', 'Martin', 'jean.martin@gmail.com', '0688883939', 'facilisis', 'Integer', '1986-05-23', '64 Rue Michel Ange, Le Havre, 76600', 'male', '0'),
    ('Sophie', 'Durand', 'sophie.durand@gmail.com', '0642768583', 'Curabitur', 'non,', '1972-08-25', '49 Rue Beauvau, Marseille, 13002', 'female', '0'),
    ('Louis', 'Lemoine', 'louis.lemoine@gmail.com', '0678276485', 'turpis.', 'ridiculus', '1983-04-10', '3 Boulevard d\'Alsace, Vénissieux, 69200', 'male', '0'),
    ('Claire', 'Morel', 'claire.morel@gmail.com', '0687837837', 'amet,', 'consequat', '1939-06-25', '23 Rue Pierre De Coubertin, Toulouse, 31300', 'female', '0'),
    ('Paul', 'Bertrand', 'paul.bertrand@gmail.com', '0754789662', 'lacus.', 'Suspendisse', '1992-07-30', '82 Rue Bonnet, Yerres, 91330', 'male', '0'),
    ('Lucie', 'Fontaine', 'lucie.fontaine@gmail.com', '0733698877', 'arcu', 'justo', '2013-07-24', '10 Avenue de l\'Épi d\'Or, Villejuif, 94800', 'female', '0'),
    ('Henri', 'Roux', 'henri.roux@gmail.com', '0776243429', 'consectetuer', 'aliquet', '1923-01-02', '466 Rue des Serres, Loiret, 45590', 'male', '0'),
    ('Élise', 'Blanc', 'elise.blanc@gmail.com', '0711881521', 'taciti', 'augue', '1960-07-05', '2 Rue d\'Azey, Saône-et-Loire, 71400', 'female', '0'),
    ('Antoine', 'Garnier', 'antoine.garnier@gmail.com', '0722713446', 'Nunc', 'pharetra', '1935-07-04', '29 Rue Maximilien Robespierre, Fontenay-sous-Bois, 94120', 'male', '0');

INSERT INTO orders_suppliers (order_date, Id_suppliers)
VALUES
    ('2024-01-15 09:45:00', 1),
    ('2024-03-22 14:30:00', 2),
    ('2024-05-08 16:50:00', 3),
    ('2024-07-19 11:15:00', 4),
    ('2024-09-05 19:00:00', 5),
    ('2024-10-11 08:30:00', 6),
    ('2024-12-03 22:10:00', 7),
    ('2024-02-27 10:05:00', 8),
    ('2024-06-25 13:40:00', 9),
    ('2024-11-01 14:23:00', 10);

INSERT INTO orders_suppliers_details (quantity, price, Id_orders_suppliers, Id_items)
VALUES
    (10, 25.50, 1, 3),
    (15, 30.99, 5, 10),
    (8, 12.75, 7, 14),
    (20, 50.00, 10, 2),
    (5, 8.99, 3, 19),
    (12, 22.49, 4, 8),
    (18, 35.75, 6, 12),
    (25, 60.20, 8, 1),
    (10, 15.00, 2, 7),
    (7, 10.50, 9, 20);

INSERT INTO orders (order_date, Id_users)
VALUES
    ('2024-11-01 14:23:00', 1),
    ('2024-11-02 09:15:00', 2),
    ('2024-11-03 17:45:00', 3),
    ('2024-11-04 11:30:00', 4),
    ('2024-11-05 16:00:00', 5),
    ('2024-11-06 08:50:00', 6),
    ('2024-11-07 13:20:00', 7),
    ('2024-11-08 15:10:00', 8),
    ('2024-11-09 10:00:00', 9),
    ('2024-11-10 18:45:00', 10);

INSERT INTO orders_users_details (quantity, price, Id_orders, Id_items)
VALUES
    (5, 10.99, 2, 15),
    (8, 20.50, 4, 7),
    (12, 35.25, 10, 3),
    (6, 12.75, 8, 18),
    (15, 50.00, 1, 5),
    (20, 45.99, 7, 9),
    (9, 22.49, 3, 12),
    (13, 30.75, 6, 11),
    (7, 18.99, 1, 4),
    (10, 25.00, 9, 16);
