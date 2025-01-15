package com.example.application.controller.gestionStocks.commands;

import com.example.application.controller.HomeModules;
import javafx.event.ActionEvent;

public class HomeCommands {
    HomeModules homeModules = new HomeModules();

    public void usersCommands(ActionEvent actionEvent) {
        homeModules.openNewWindow("/gestionStocks/commands/usersCommands/usersCommandsView.fxml", "Creation d'une commande");
    }

    public void commands(ActionEvent actionEvent) {
        homeModules.openNewWindow("/gestionStocks/commands/suppliersCommands/suppliersCommandsView.fxml", "Creation d'une commande");
    }
}
