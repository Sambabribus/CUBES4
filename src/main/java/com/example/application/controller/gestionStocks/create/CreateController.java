package com.example.application.controller.gestionStocks.create;

import com.example.application.controller.HomeModules;
import javafx.event.ActionEvent;

public class CreateController {
    HomeModules homeModules = new HomeModules();
    public void users(ActionEvent actionEvent) {
        homeModules.openNewWindow("/gestionStocks/create/users/usersview.fxml", "Creation utilisateur");
    }

    public void suppliers(ActionEvent actionEvent) {
        homeModules.openNewWindow("/gestionStocks/create/suppliers/suppliersView.fxml", "Creation du fournisseur");
    }

    public void items() {
        homeModules.openNewWindow("/gestionStocks/create/items/itemsView.fxml", "Passer une commande");
    }
}
