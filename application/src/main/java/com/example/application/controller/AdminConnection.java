package com.example.application.controller;

import com.example.application.model.Users;
import com.example.application.service.UsersService;
import com.example.application.utils.AlertMessages;
import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class AdminConnection {
    private final UsersService usersService;
    @FXML
    public TextField password;
    @FXML
    public TextField username;

    public AdminConnection() {
        this.usersService = new UsersService();
    }

    public void connection(ActionEvent actionEvent) {

        if (username.getText().isEmpty() || password.getText().isEmpty()) {
            AlertMessages.errorMessage("Erreur", "Tous les champs sont à completer");
        } else {
            Users user = new Users();

            user.setUsername(username.getText());
            user.setPassword(password.getText());
            if (usersService.loginUser(user) == null) {
                AlertMessages.errorMessage("Erreur de connexion", "Mot de passe ou username incorrect ou vous n'avez pas les droits");
            } else {
                NavigationManager.getInstance().navigateTo(actionEvent, "/homeModulesView.fxml", "Gestion de l'inventaire");
            }
        }
    }
}
