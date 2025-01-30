package com.example.application.controller.gestionStocks;

import com.example.application.utils.NavigationManager;
import javafx.event.ActionEvent;

public class HomeGestionStocks {

    public void Create(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionStocks/create/createView.fxml", "Creation d'une fiche");
    }

    public void commands(ActionEvent actionEvent) {
        NavigationManager.openNewWindow("/gestionStocks/commands/suppliersCommands/suppliersCommandsView.fxml", "Creation d'une commande");
    }
}
