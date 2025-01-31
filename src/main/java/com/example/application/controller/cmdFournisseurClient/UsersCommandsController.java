package com.example.application.controller.cmdFournisseurClient;

import com.example.application.model.Items;
import com.example.application.model.Users;
import com.example.application.service.ItemsService;
import com.example.application.service.UsersService;
import com.example.application.utils.AlertMessages;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UsersCommandsController {

    private final ItemsService itemsService;
    private final UsersService usersService;
    @FXML
    public TextField quantityField;
    @FXML
    public ComboBox<Items> itemsComboBox;
    @FXML
    public ComboBox<Users> usersComboBox;

    public UsersCommandsController() {
        this.itemsService = new ItemsService();
        this.usersService = new UsersService();
    }

    @FXML
    public void initialize() {
        // récuperation de l'ensemble des valeurs pas seulement l'affichage des toString
        List<Users> users = usersService.getAllUsers();
        List<Items> items = itemsService.getAllItems();

        usersComboBox.setItems(FXCollections.observableList(users));
        itemsComboBox.setItems(FXCollections.observableList(items));
    }

    public void handleCreateButton(ActionEvent actionEvent) {
        // Test si les champs sont remplis ou non
        if (quantityField.getText().isEmpty() || itemsComboBox.getSelectionModel().getSelectedItem() == null || usersComboBox.getSelectionModel().getSelectedItem() == null) {
            AlertMessages.errorMessage("Erreur", "Tous les champs sont obligatoires");
            return;
        }
        // Test si l'utilisateur rentre la bonne valeur dans la case
        int quantity;
        quantity = Integer.parseInt(quantityField.getText());
        if (quantity <= 0) {
            AlertMessages.errorMessage("Erreur", "La quantité doit être positive");
            return;
        }

        // On vient cibler notre donnée spécifique à l'emplacement de notre menu déroulant pour récuperer les données de l'objet
        Items selectedItem = itemsComboBox.getSelectionModel().getSelectedItem();
        Users selectedUser = usersComboBox.getSelectionModel().getSelectedItem();

        // Integration des hashmap pour donner une clés valeur notre json
        Map<String, Integer> request = new HashMap<>();
        request.put("quantity", quantity);
        request.put("Id_items", selectedItem.getId());
        request.put("Id_users", selectedUser.getId_users());


        try {
            // appel de la methode pour ajouter la commande de l'utilisateur
            itemsService.sellItem(request);
            AlertMessages.successMessage("Succès", "Création de la commande avec succès");
        } catch (Exception e) {
            // Gestion des erreurs inattendues
            AlertMessages.errorMessage("Erreur", "Stock insuffisant : ");
        }
    }
}
