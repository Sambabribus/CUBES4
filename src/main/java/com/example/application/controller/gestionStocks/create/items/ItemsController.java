package com.example.application.controller.gestionStocks.create.items;

import com.example.application.controller.AlertMessages;
import com.example.application.model.Items;
import com.example.application.model.Orders;
import com.example.application.model.Suppliers;
import com.example.application.service.ItemsService;
import com.example.application.service.OrdersService;
import com.example.application.service.SuppliersService;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

import java.util.List;

public class ItemsController {
    private final AlertMessages alertMessages;
    private final ItemsService itemsService;
    @FXML
    private TextField nameField;
    @FXML
    private TextField typeAlcoholField;
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

    public void handleCreateButton(ActionEvent actionEvent) {

        if (nameField.getText().isEmpty() || typeAlcoholField.getText().isEmpty() || domainNameField.getText().isEmpty() || millesimeField.getText().isEmpty()
                || purchasePriceField.getText().isEmpty() || sellingPriceField.getText().isEmpty() || stockQuantityField.getText().isEmpty()
                || descriptionField.getText().isEmpty()) {

            alertMessages.errorMessage("Erreur", "Tous les champs doivent etre completés");
        } else {

            Items item = new Items();
            item.setName(nameField.getText());
            item.setalcohol_type(typeAlcoholField.getText());
            item.setDomain_name(domainNameField.getText());
            item.setMillesime(millesimeField.getText());
            item.setPurchase_price(Double.parseDouble(purchasePriceField.getText()));
            item.setSelling_price(Double.parseDouble(sellingPriceField.getText()));
            item.setStock_quantity(Integer.parseInt(stockQuantityField.getText()));
            item.setDescription(descriptionField.getText());

            itemsService.createItem(item);

            alertMessages.successMessage("Succés", "Création des articles");
        }



    }
}
