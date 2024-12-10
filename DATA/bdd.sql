CREATE TABLE items(
   Id_items INT AUTO_INCREMENT,
   name VARCHAR(255) ,
   alcohol_type VARCHAR(100) ,
   domain_name TEXT,
   millesime VARCHAR(50) ,
   purchase_price DECIMAL(10,2)  ,
   selling_price DECIMAL(10,2)  ,
   stock_quantity INT,
   description TEXT,
   PRIMARY KEY(Id_items)
);

CREATE TABLE users(
   Id_users INT AUTO_INCREMENT,
   mail VARCHAR(255) ,
   phone_number VARCHAR(20) ,
   address VARCHAR(255) ,
   username VARCHAR(255) ,
   password VARCHAR(255) ,
   first_name VARCHAR(255) ,
   birthday DATE,
   gender VARCHAR(10) ,
   last_name VARCHAR(255) ,
   isAdmin BOOLEAN,
   PRIMARY KEY(Id_users),
   UNIQUE(mail),
   UNIQUE(username)
);

CREATE TABLE suppliers(
   Id_suppliers INT AUTO_INCREMENT,
   name VARCHAR(255) ,
   address VARCHAR(255) ,
   phone_number VARCHAR(20) ,
   mail VARCHAR(255) ,
   region VARCHAR(100) ,
   alcohol_provided TEXT,
   PRIMARY KEY(Id_suppliers)
);

CREATE TABLE orders_suppliers(
   Id_orders_suppliers INT AUTO_INCREMENT,
   order_date DATETIME,
   Id_suppliers INT NOT NULL,
   PRIMARY KEY(Id_orders_suppliers),
   FOREIGN KEY(Id_suppliers) REFERENCES suppliers(Id_suppliers)
);

CREATE TABLE orders_suppliers_details(
   Id_orders_suppliers_details INT AUTO_INCREMENT,
   quantity INT,
   price DECIMAL(10,2)  ,
   Id_orders_suppliers INT NOT NULL,
   Id_items INT NOT NULL,
   PRIMARY KEY(Id_orders_suppliers_details),
   FOREIGN KEY(Id_orders_suppliers) REFERENCES orders_suppliers(Id_orders_suppliers),
   FOREIGN KEY(Id_items) REFERENCES items(Id_items)
);

CREATE TABLE orders(
   Id_orders INT AUTO_INCREMENT,
   order_date DATETIME,
   Id_users INT NOT NULL,
   PRIMARY KEY(Id_orders),
   FOREIGN KEY(Id_users) REFERENCES users(Id_users)
);

CREATE TABLE orders_users_details(
   Id_orders_users_details INT AUTO_INCREMENT,
   quantity INT,
   price DECIMAL(10,2)  ,
   Id_items INT NOT NULL,
   Id_orders INT NOT NULL,
   PRIMARY KEY(Id_orders_users_details),
   FOREIGN KEY(Id_items) REFERENCES items(Id_items),
   FOREIGN KEY(Id_orders) REFERENCES orders(Id_orders)
);
