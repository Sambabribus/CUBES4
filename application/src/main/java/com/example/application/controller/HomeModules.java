package com.example.application.controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Modality;
import javafx.stage.Stage;

import java.io.IOException;

public class HomeModules {

    @FXML
    public void gestionStock(ActionEvent actionEvent) {
        openNewWindow("/gestionStocks/homeGestionStocksView.fxml", "Gestion des stocks");
    }
    @FXML
    public void gestionInventaire(ActionEvent actionEvent) {
    }
    @FXML
    public void cmdFournisseurEtClient(ActionEvent actionEvent) {
    }

    // Methode pour l'ouverture d'une nouvelle page
    public void openNewWindow(String fxml, String title) {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/example/application/view" + fxml));
            Parent root = loader.load();

            Stage stage = new Stage();
            stage.setTitle(title);
            stage.setScene(new Scene(root));
            stage.initModality(Modality.APPLICATION_MODAL);
            stage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}