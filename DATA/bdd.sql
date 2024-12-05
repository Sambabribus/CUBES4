CREATE TABLE Users(
                      Id_Users INT AUTO_INCREMENT,
                      mail VARCHAR(255) ,
                      phone_number VARCHAR(100) ,
                      adresses VARCHAR(255) ,
                      username VARCHAR(255) ,
                      password VARCHAR(255) ,
                      first_name VARCHAR(255) ,
                      birthday DATE,
                      gender VARCHAR(8) ,
                      last_name VARCHAR(255) ,
                      isAdmin BOOLEAN,
                      PRIMARY KEY(Id_Users)
);

CREATE TABLE Suppliers(
                          Id_Suppliers INT AUTO_INCREMENT,
                          name VARCHAR(255) ,
                          adresses VARCHAR(255) ,
                          phone_number VARCHAR(20) ,
                          mail VARCHAR(255) ,
                          region VARCHAR(100) ,
                          alcohol_provided TEXT,
                          PRIMARY KEY(Id_Suppliers)
);

CREATE TABLE Orders(
                       Id_Orders INT AUTO_INCREMENT,
                       order_date DATE,
                       quantity INT,
                       Id_Users INT NOT NULL,
                       PRIMARY KEY(Id_Orders),
                       FOREIGN KEY(Id_Users) REFERENCES Users(Id_Users)
);

CREATE TABLE Items(
                      Id_Items INT AUTO_INCREMENT,
                      name VARCHAR(255) ,
                      type_alcohol VARCHAR(100) ,
                      domain_name TEXT,
                      millesime VARCHAR(50) ,
                      purchase_price DECIMAL(10,2)  ,
                      selling_price DECIMAL(10,2)  ,
                      stock_quantity INT,
                      description TEXT,
                      Id_Suppliers INT NOT NULL,
                      Id_Orders INT NOT NULL,
                      PRIMARY KEY(Id_Items),
                      FOREIGN KEY(Id_Suppliers) REFERENCES Suppliers(Id_Suppliers),
                      FOREIGN KEY(Id_Orders) REFERENCES Orders(Id_Orders)
);
