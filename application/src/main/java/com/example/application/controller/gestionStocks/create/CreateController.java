package com.example.application.controller.gestionStocks.create;

import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;

public class CreateController {

    public void users(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionStocks/create/users/usersview.fxml", "Creation utilisateur");
    }

    public void suppliers(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionStocks/create/suppliers/suppliersView.fxml", "Creation du fournisseur");
    }

    public void items() {
        NavigationManager.openNewWindow("/gestionStocks/create/items/itemsView.fxml", "Passer une commande");
    }
}
