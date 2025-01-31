package com.example.application.controller.gestionStocks.create.items;

import com.example.application.model.Items;
import com.example.application.service.ItemsService;
import com.example.application.utils.AlertMessages;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

public class ItemsController {
    private final AlertMessages alertMessages;
    private final ItemsService itemsService;
    @FXML
    private TextField nameField;
    @FXML
    private ComboBox<String> typeAlcoholComboBox;
    @FXML
    private TextField domainNameField;
    @FXML
    private TextField millesimeField;
    @FXML
    private TextField purchasePriceField;
    @FXML
    private TextField sellingPriceField;
    @FXML
    private TextField stockQuantityField;
    @FXML
    private TextField descriptionField;

    public ItemsController() {
        this.itemsService = new ItemsService();
        this.alertMessages = new AlertMessages();
    }

    public void initialize() {
        typeAlcoholComboBox.getItems().addAll("Vin blanc sec", "Armagnac", "Vin rouge", "Vin blanc doux", "Vin rosé", "Floc de Gascogne", "Vin blanc moelleux", "Madiran", "Vin blanc fruité", "Pacherenc", "Vin bio rosé");
        typeAlcoholComboBox.setValue("Vin rouge");
    }

    public void handleCreateButton(ActionEvent actionEvent) {

        if (nameField.getText().isEmpty() || typeAlcoholComboBox.getValue().isEmpty() || domainNameField.getText().isEmpty() || millesimeField.getText().isEmpty()
                || purchasePriceField.getText().isEmpty() || sellingPriceField.getText().isEmpty() || stockQuantityField.getText().isEmpty()
                || descriptionField.getText().isEmpty()) {
            AlertMessages.errorMessage("Erreur", "Tous les champs doivent etre completés");
            return;
        }

        int stockQuantity;
        double purchasePrice;
        double sellingPrice;

        try {
            stockQuantity = Integer.parseInt(stockQuantityField.getText());
            purchasePrice = Double.parseDouble(purchasePriceField.getText());
            sellingPrice = Double.parseDouble(sellingPriceField.getText());

            if (stockQuantity < 0 || purchasePrice < 0 || sellingPrice < 0) {
                AlertMessages.errorMessage("Erreur", "La quantité doit être positive");
                return;
            }
        } catch (NumberFormatException e) {
            AlertMessages.errorMessage("Erreur", "La quantité doit être un nombre entier positif");
            return;
        }
        Items item = new Items();
        item.setName(nameField.getText());
        item.setAlcohol_type(typeAlcoholComboBox.getValue());
        item.setDomain_name(domainNameField.getText());
        item.setMillesime(millesimeField.getText());
        item.setPurchase_price(purchasePrice);
        item.setSelling_price(sellingPrice);
        item.setStock_quantity(stockQuantity);
        item.setDescription(descriptionField.getText());

        try {
            itemsService.createItem(item);
            AlertMessages.successMessage("Succés", "Création des articles");
        } catch (Exception e) {
            AlertMessages.errorMessage("Erreur", "Une erreur est survenue lors de la création de la commande : " + e.getMessage());
        }

    }
}
