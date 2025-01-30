package com.example.application.controller.gestionStocks.create.users;

import com.example.application.model.Users;
import com.example.application.service.UsersService;
import com.example.application.utils.AlertMessages;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;

public class UsersController {
    private final UsersService usersService;
    private final AlertMessages alertMessages;
    @FXML
    public TextField nameField;
    @FXML
    public TextField firstNameField;
    @FXML
    public TextField emailField;
    @FXML
    public TextField phoneField;
    @FXML
    public ComboBox<String> genreComboBox;
    @FXML
    public TextField passwordField;
    @FXML
    public TextField usernameField;
    @FXML
    public TextField addressField;
    @FXML
    public DatePicker birthdatePicker;

    public UsersController() {
        this.usersService = new UsersService();
        this.alertMessages = new AlertMessages();
    }

    // Methode pour initialiser les structures et les données de l'appli par classe
    public void initialize() {
        // Ajout des genres
        genreComboBox.getItems().addAll("Homme", "Femme", "Autre");
        // Valeur par defaut
        genreComboBox.setValue("Homme");

    }

    public void handleCreateButton() {
        // Verification si les champs sont remplis
        if (birthdatePicker.getValue() == null || firstNameField.getText().isEmpty() || nameField.getText().isEmpty() || phoneField.getText().isEmpty() || emailField.getText().isEmpty() || addressField.getText().isEmpty() || passwordField.getText().isEmpty() || phoneField.getText().isEmpty() || genreComboBox.getItems() == null || usernameField.getText().isEmpty()) {
            AlertMessages.errorMessage("Erreur", "L'ensemble des champs doivent etre completés");
            return;
        }

        Users users = new Users();

        users.setBirthday((birthdatePicker.getValue()));
        users.setFirst_name(firstNameField.getText());
        users.setLast_name(nameField.getText());
        users.setMail(emailField.getText());
        users.setaddress(addressField.getText());
        users.setPassword(passwordField.getText());
        users.setPhone_number(phoneField.getText());
        users.setGender(genreComboBox.getValue());
        users.setUsername(usernameField.getText());

        try {
            usersService.createUser(users);
            AlertMessages.successMessage("Succés", "Création de l'utilisateur réussi");
        } catch (Exception e) {
            AlertMessages.errorMessage("Erreur", "pseudo ou email deja utilisé");
        }
    }
}
