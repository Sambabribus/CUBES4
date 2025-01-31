package com.example.application.controller.gestionStocks.commands.suppliersCommands;

import com.example.application.model.Items;
import com.example.application.model.Suppliers;
import com.example.application.service.ItemsService;
import com.example.application.service.SuppliersService;
import com.example.application.utils.AlertMessages;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SuppliersCommandsController {
    private final SuppliersService suppliersService;
    private final ItemsService itemsService;
    @FXML
    public TextField quantityField;
    @FXML
    public ComboBox<Items> itemsComboBox;
    @FXML
    public ComboBox<Suppliers> suppliersComboBox;

    public SuppliersCommandsController() {
        this.suppliersService = new SuppliersService();
        this.itemsService = new ItemsService();
    }

    public void initialize() {
        List<Items> itemsList = itemsService.getAllItems();
        List<Suppliers> suppliersList = suppliersService.getAllSuppliers();

        itemsComboBox.setItems(FXCollections.observableList(itemsList));
        suppliersComboBox.setItems(FXCollections.observableList(suppliersList));
    }

    public void handleCreateButton(ActionEvent actionEvent) {
        // Si champs vide renvoie une erreur
        if (quantityField.getText().isEmpty() || itemsComboBox.getSelectionModel().getSelectedItem() == null || suppliersComboBox.getSelectionModel().getSelectedItem() == null) {
            AlertMessages.errorMessage("Erreur", "Tous les champs sont obligatoires");
            return;
        }
        // On test si l'utilisateur rentre bien la bonne valeur
        int quantity;
        try {
            quantity = Integer.parseInt(quantityField.getText());
            if (quantity <= 0) {
                AlertMessages.errorMessage("Erreur", "La quantité doit être positive");
                return;
            }
        } catch (NumberFormatException e) {
            AlertMessages.errorMessage("Erreur", "La quantité doit être un nombre entier positif");
            return;
        }

        Items items = itemsComboBox.getSelectionModel().getSelectedItem();
        Suppliers suppliers = suppliersComboBox.getSelectionModel().getSelectedItem();

        Map<String, Integer> map = new HashMap<>();
        map.put("quantity", quantity);
        map.put("Id_items", items.getId());
        map.put("Id_suppliers", suppliers.getId_Suppliers());

        try {
            // Appel du service pour ajouter l'item
            itemsService.addItem(map);

            AlertMessages.successMessage("Succès", "Création de la commande avec succès");
        } catch (Exception e) {
            // Gestion des erreurs inattendues
            AlertMessages.errorMessage("Erreur", "Une erreur est survenue lors de la création de la commande : " + e.getMessage());
        }
    }
}
