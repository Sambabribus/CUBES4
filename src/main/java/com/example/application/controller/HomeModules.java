package com.example.application.controller;

import com.example.application.service.NotificationService;
import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

public class HomeModules {

    @FXML
    public void gestionStock(ActionEvent actionEvent) {
        NotificationService.showNotification("titre", "contenu");
        NavigationManager.getInstance().navigateTo(actionEvent, "/gestionStocks/homeGestionStocksView.fxml", "Gestion des stocks");
    }

    @FXML
    public void gestionInventaire(ActionEvent actionEvent) {
        NavigationManager.getInstance().navigateTo(actionEvent, "/inventory.fxml", "Gestion de inventaire");
    }

    @FXML
    public void cmdFournisseurEtClient(ActionEvent actionEvent) {
        NavigationManager.getInstance().navigateTo(actionEvent, "/cmdFournisseurEtClientView.fxml", "Commandes fournisseurs et clients");
    }

}
