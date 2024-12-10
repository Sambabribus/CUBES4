package com.example.application.controller;

import com.example.application.model.Users;
import com.example.application.service.UsersService;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class AdminConnection {
    private final UsersService usersService;
    private final HomeModules homeModules;
    private final AlertMessages alertMessages;
    @FXML
    public TextField password;
    @FXML
    public TextField username;

    public AdminConnection() {
        this.usersService = new UsersService();
        this.homeModules = new HomeModules();
        this.alertMessages = new AlertMessages();
    }

    public void connection(ActionEvent actionEvent) {

        if (username.getText().isEmpty() || password.getText().isEmpty()) {
            alertMessages.errorMessage("Erreur", "Tous les champs sont à completer");
        } else {
            Users user = new Users();

            user.setUsername(username.getText());
            user.setPassword(password.getText());
            if (usersService.loginUser(user) == null) {
                alertMessages.errorMessage("Erreur de connexion", "Mot de passe ou username incorrect");
            } else {
                homeModules.openNewWindow("/gestionStocks/homeGestionStocksView.fxml", "Accueil");
            }
        }
    }
}
