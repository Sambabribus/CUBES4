package com.example.application.controller.gestionStocks;

import com.example.application.controller.HomeModules;
import javafx.event.ActionEvent;

public class HomeGestionStocks {
    HomeModules homeModules = new HomeModules();
    public void Create(ActionEvent actionEvent) {
        homeModules.openNewWindow("/gestionStocks/create/createView.fxml", "Creation d'une fiche");
    }

    public void modifyStocks(ActionEvent actionEvent) {
    }

    public void commands(ActionEvent actionEvent) {
    }
}
