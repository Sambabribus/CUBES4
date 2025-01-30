package com.example.application.controller;

import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

public class HomeModules {

    @FXML
    public void gestionStock(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionStocks/homeGestionStocksView.fxml", "Gestion des stocks");
    }

    @FXML
    public void gestionInventaire(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionInventaire/inventoryView.fxml", "Gestion de l'inventaire");
    }

    @FXML
    public void cmdFournisseurEtClient(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/cmdFournisseurClient/usersCommandsView.fxml", "Gestion de l'inventaire");
    }

}