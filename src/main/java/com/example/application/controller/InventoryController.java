package com.example.application.controller;

import com.example.application.model.Items;
import com.example.application.service.ItemsService;
import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.util.converter.IntegerStringConverter;

import java.util.List;
import java.util.ArrayList;


public class InventoryController {

    @FXML
    private TableView<Items> tableView;

    @FXML
    private TableColumn<Items, Integer> idColumn;

    @FXML
    private TableColumn<Items, String> nameColumn;

    @FXML
    private TableColumn<Items, String> typeColumn;

    @FXML
    private TableColumn<Items, String> domainColumn;

    @FXML
    private TableColumn<Items, Integer> quantityColumn;

    @FXML
    private TableColumn<Items, Double> purchasePriceColumn;

    @FXML
    private TableColumn<Items, Double> sellingPriceColumn;

    @FXML
    private Button saveButton;

    @FXML
    private Button deleteButton;

    private ItemsService itemsService;

    // Liste des articles modifiés
    private List<Items> modifiedItems;

    public void initialize() {
        itemsService = new ItemsService();
        modifiedItems = new ArrayList<>();

        // Rendre la table modifiable
        tableView.setEditable(true);

        // Configuration des colonnes de la table
        idColumn.setCellValueFactory(new PropertyValueFactory<>("id"));
        nameColumn.setCellValueFactory(new PropertyValueFactory<>("name"));
        typeColumn.setCellValueFactory(new PropertyValueFactory<>("alcoholType"));
        domainColumn.setCellValueFactory(new PropertyValueFactory<>("domainName"));
        quantityColumn.setCellValueFactory(new PropertyValueFactory<>("stockQuantity"));
        purchasePriceColumn.setCellValueFactory(new PropertyValueFactory<>("purchasePrice"));
        sellingPriceColumn.setCellValueFactory(new PropertyValueFactory<>("sellingPrice"));

        // Rendre uniquement la colonne Quantité modifiable
        quantityColumn.setCellFactory(column -> {
            // Création d'un TextFieldTableCell personnalisé avec un IntegerStringConverter
            TextFieldTableCell<Items, Integer> cell = new TextFieldTableCell<>(new IntegerStringConverter()) {

                private TextField textField;

                @Override
                public void startEdit() {
                    super.startEdit();
                    if (!isEditing()) {
                        return;
                    }

                    // Crée (si null) et configure le textField
                    if (textField == null) {
                        textField = new TextField();

                        // Commit sur Entrée (comportement standard)
                        textField.setOnAction(e -> {
                            commitEditSafe();
                        });

                        textField.focusedProperty().addListener((obs, wasFocused, isNowFocused) -> {
                            if (!isNowFocused) {
                                commitEditSafe();
                            }
                        });
                    }

                    // Mise en place du textField dans la cellule
                    setGraphic(textField);
                    setContentDisplay(ContentDisplay.GRAPHIC_ONLY);

                    // Le texte affiché dans le textField = valeur courante de la cellule
                    textField.setText(getItem() == null ? "" : getItem().toString());
                    textField.selectAll();
                    textField.requestFocus();
                }

                @Override
                public void cancelEdit() {
                    super.cancelEdit();
                    setContentDisplay(ContentDisplay.TEXT_ONLY);
                    // Restaure le texte original
                    setText(getItem() == null ? "" : getItem().toString());
                    setGraphic(null);
                }

                @Override
                public void updateItem(Integer item, boolean empty) {
                    super.updateItem(item, empty);

                    if (empty) {
                        setText(null);
                        setGraphic(null);
                    } else {
                        if (isEditing()) {
                            // Si on est en mode édition, afficher le textField
                            if (textField != null) {
                                textField.setText(item == null ? "" : item.toString());
                            }
                            setGraphic(textField);
                            setContentDisplay(ContentDisplay.GRAPHIC_ONLY);
                        } else {
                            // Sinon, affichage normal (valeur)
                            setText(item == null ? "" : item.toString());
                            setContentDisplay(ContentDisplay.TEXT_ONLY);
                            setGraphic(null);
                        }
                    }
                }

                /**
                 * Méthode utilitaire pour éviter les exceptions lors du commit
                 * (par exemple si le textField est vide ou ne contient pas un entier).
                 */
                private void commitEditSafe() {
                    try {
                        // Si le textField est vide, on peut décider de mettre 0 ou annuler l'édition
                        if (textField.getText().isEmpty()) {
                            commitEdit(0);
                        } else {
                            Integer newValue = Integer.valueOf(textField.getText());
                            commitEdit(newValue);
                        }
                    } catch (NumberFormatException e) {
                        // En cas de valeur incorrecte, on peut soit annuler, soit remettre l'ancienne valeur
                        cancelEdit();
                    }
                }
            };
            return cell;
        });

        quantityColumn.setOnEditCommit(event -> {
            Items currentItem = event.getRowValue();
            Integer newQuantity = event.getNewValue();
            currentItem.setStockQuantity(newQuantity);
        });

        quantityColumn.setOnEditCommit(event -> {
            Items item = event.getRowValue();
            item.setStockQuantity(event.getNewValue());

            // Ajouter l'article à la liste des articles modifiés si ce n'est pas déjà fait
            if (!modifiedItems.contains(item)) {
                modifiedItems.add(item);
            }
        });

        loadItems();
    }

    /**
     * Charger tous les articles depuis l'API
     */
    private void loadItems() {
        try {
            List<Items> items = itemsService.getAllItems();
            tableView.getItems().setAll(items);
        } catch (Exception e) {
            showAlert(Alert.AlertType.ERROR, "Erreur", "Impossible de charger les articles.");
            e.printStackTrace();
        }
    }

    /**
     * Sauvegarder les modifications au clic du bouton "Enregistrer les modifications"
     */
    @FXML
    private void handleSave() {
        try {
            // Récupère tous les items affichés dans la TableView
            List<Items> modifiedItems = tableView.getItems();

            for (Items item : modifiedItems) {
                itemsService.updateItem(item);
            }
            showAlert(Alert.AlertType.INFORMATION, "Succès", "Toutes les modifications ont été enregistrées avec succès.");
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Erreur", "Impossible d'enregistrer les modifications.");
        }
    }

    /**
     * Supprimer un article sélectionné dans la TableView
     */
    @FXML
    public void handleDelete() {
        Items selectedItem = tableView.getSelectionModel().getSelectedItem();
        if (selectedItem != null) {
            try {
                itemsService.deleteItem(selectedItem.getId());
                tableView.getItems().remove(selectedItem);
                modifiedItems.remove(selectedItem); // Retirer de la liste des modifiés s'il y est
                showAlert(Alert.AlertType.INFORMATION, "Succès", "L'article a été supprimé.");
            } catch (Exception e) {
                showAlert(Alert.AlertType.ERROR, "Erreur", "Impossible de supprimer l'article.");
                e.printStackTrace();
            }
        } else {
            showAlert(Alert.AlertType.WARNING, "Information", "Veuillez sélectionner un article à supprimer.");
        }
    }

    /**
     * Méthode pour afficher des alertes
     */
    private void showAlert(Alert.AlertType alertType, String title, String message) {
        Alert alert = new Alert(alertType);
        alert.setTitle(title);
        alert.setContentText(message);
        alert.showAndWait();
    }

    @FXML
    public void handleBack(ActionEvent actionEvent) {
        NavigationManager.getInstance().navigateBack();
    }
}
