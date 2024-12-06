package com.example.application.controller.gestionStocks.create.suppliers;

import com.example.application.controller.AlertMessages;
import com.example.application.model.Suppliers;
import com.example.application.service.HttpClientService;
import com.example.application.service.SuppliersService;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;

public class SuppliersController {
    private final AlertMessages alertMessages;
    private final SuppliersService suppliersService;
    @FXML
    private TextField nameField;
    @FXML
    private TextField emailField;
    @FXML
    private TextField phoneField;
    @FXML
    private TextField addressField;
    @FXML
    private TextField regionField;
    @FXML
    private TextField alcoolField;

    public SuppliersController() {
        this.suppliersService = new SuppliersService();
        this.alertMessages = new AlertMessages();
    }


    public void handleCreateButton() {
        Suppliers suppliers = new Suppliers();

        if (nameField.getText().isEmpty() || emailField.getText().isEmpty() || phoneField.getText().isEmpty() || addressField.getText().isEmpty() || regionField.getText().isEmpty() || alcoolField.getText().isEmpty()) {
            alertMessages.errorMessage("Erreur", "L'ensemble des champs doivent etre completés");
            return;
        } else {
            suppliers.setName(nameField.getText());
            suppliers.setMail(emailField.getText());
            suppliers.setPhone_number(phoneField.getText());
            suppliers.setAdresses(addressField.getText());
            suppliers.setRegion(regionField.getText());
            suppliers.setAlcohol_provided(alcoolField.getText());

            suppliersService.createSupplier(suppliers);

            alertMessages.successMessage("Succés", "Création de l'utilisateur réussi");
        }


    }
}
