package com.example.application.controller.gestionInventaire;

import com.example.application.model.Items;
import com.example.application.service.ItemsService;
import com.example.application.utils.AlertMessages;
import com.example.application.utils.MethodsController;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.util.converter.IntegerStringConverter;

import java.util.List;

public class InventoryController {
    private final MethodsController methodsController;
    private final ItemsService itemsService;
    @FXML
    private TableView<Items> itemsTableView;
    private TableColumn<Items, String> name;
    private TableColumn<Items, String> alcohol_type;
    private TableColumn<Items, String> domain_name;
    private TableColumn<Items, String> millesime;
    private TableColumn<Items, Double> purchase_price;
    private TableColumn<Items, Double> selling_price;
    private TableColumn<Items, Integer> stock_quantity;
    private TableColumn<Items, String> description;

    public InventoryController() {
        this.methodsController = new MethodsController();
        this.itemsService = new ItemsService();
    }


    public void initialize() {
        // resize de la table pour avoir un affichage proportionnel
        itemsTableView.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);
        // Rendre editable les colonnes
        itemsTableView.setEditable(true);

        // Creation des noms de tables
        name = new TableColumn<>("Nom");
        alcohol_type = new TableColumn<>("Alcohol Type");
        domain_name = new TableColumn<>("Domain Name");
        millesime = new TableColumn<>("Millesime");
        purchase_price = new TableColumn<>("Purchase");
        selling_price = new TableColumn<>("Selling");
        stock_quantity = new TableColumn<>("Stock Quantity");
        description = new TableColumn<>("Description");

        // On set les cellules. Le "name" va directement chercher le getter dans la table Items
        // On utilise PropertyValueFactory pour lier une colonne à une propriété simple de l'objet
        name.setCellValueFactory(new PropertyValueFactory<>("name"));
        alcohol_type.setCellValueFactory(new PropertyValueFactory<>("alcohol_type"));
        domain_name.setCellValueFactory(new PropertyValueFactory<>("domain_name"));
        millesime.setCellValueFactory(new PropertyValueFactory<>("millesime"));
        purchase_price.setCellValueFactory(new PropertyValueFactory<>("purchase_price"));
        selling_price.setCellValueFactory(new PropertyValueFactory<>("selling_price"));
        stock_quantity.setCellValueFactory(new PropertyValueFactory<>("stock_quantity"));
        description.setCellValueFactory(new PropertyValueFactory<>("description"));

        // On ajoute les colonnes à la table View
        itemsTableView.getColumns().addAll(name, alcohol_type, domain_name, millesime, purchase_price, selling_price, stock_quantity);
        // Appel de la methode getAllItems pour récuperer la liste d'objet
        List<Items> items = itemsService.getAllItems();
        // affiche et remplace le contenu des colonnes de la tableView
        itemsTableView.getItems().setAll(items);

        // Permet de double clicker sur la cellule et de l'éditer
        stock_quantity.setCellFactory(TextFieldTableCell.forTableColumn(new IntegerStringConverter()));
        // Gestionnaire d'evenement lors d'une modification est validée
        stock_quantity.setOnEditCommit(event -> {
            // Récuperation de l'objet employé associé à la ligne en cours
            Items item = event.getRowValue();
            if (event.getNewValue() < 0) {
                AlertMessages.errorMessage("Erreur", "La quantité doit être positive");
                return;
            }
            try {
                // Mettre à jour la case avec la nouvelle valeur
                item.setStock_quantity(event.getNewValue());
                // Appel de la methode pour update
                methodsController.updateInDatabase(itemsService, "updateItem", item);
                AlertMessages.successMessage("succès", "Mise à jour du stock");
            } catch (Exception e) {
                AlertMessages.errorMessage("Erreur", "Une erreur est survenue lors de la mise à jour : " + e.getMessage());
            }

        });
    }

    public void onDeleteButtonClick(ActionEvent actionEvent) {
        try {
            methodsController.deleteSelectedItem(itemsTableView, itemsService, "getId", "deleteItem");
            AlertMessages.successMessage("Succés", "Succés de la suppression");
        } catch (Exception e) {
            AlertMessages.errorMessage("Erreur", "Erreur lors de la suppression" + e.getMessage());
        }

    }

}
