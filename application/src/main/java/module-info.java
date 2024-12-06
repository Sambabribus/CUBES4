module com.example.application {
    requires javafx.controls;
    requires javafx.fxml;
    requires com.fasterxml.jackson.databind;


    requires org.controlsfx.controls;
    requires net.synedra.validatorfx;
    requires org.kordamp.bootstrapfx.core;
    requires org.apache.commons.codec;
    requires java.sql;
    requires com.fasterxml.jackson.datatype.jsr310;

    opens com.example.application to javafx.fxml;
    exports com.example.application.model;
    exports com.example.application;
    exports com.example.application.controller;
    opens com.example.application.controller to javafx.fxml;
    exports com.example.application.controller.gestionStocks;
    opens com.example.application.controller.gestionStocks to javafx.fxml;
    exports com.example.application.controller.gestionStocks.create;
    opens com.example.application.controller.gestionStocks.create to javafx.fxml;
    exports com.example.application.controller.gestionStocks.create.users;
    opens com.example.application.controller.gestionStocks.create.users to javafx.fxml;
    exports com.example.application.controller.gestionStocks.create.suppliers;
    opens com.example.application.controller.gestionStocks.create.suppliers to javafx.fxml;
    exports com.example.application.controller.gestionStocks.create.items;
    opens com.example.application.controller.gestionStocks.create.items to javafx.fxml;
    opens com.example.application.model to com.fasterxml.jackson.databind;
}