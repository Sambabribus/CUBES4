package com.example.application.utils;

import javafx.event.ActionEvent;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Stack;

public class NavigationManager {

    private static NavigationManager instance;
    private final Stack<Parent> history = new Stack<>();
    private Stage primaryStage;

    private NavigationManager() {
    }

    public static NavigationManager getInstance() {
        if (instance == null) {
            instance = new NavigationManager();
        }
        return instance;
    }

    public void setPrimaryStage(Stage stage) {
        this.primaryStage = stage;
    }


    public void navigateTo(ActionEvent actionEvent, String fxml, String title) {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/example/application/view" + fxml));
            Parent newView = loader.load();
            // Ajouter la vue actuelle à l'historique avant de naviguer
            if (primaryStage.getScene() != null) {
                history.push(primaryStage.getScene().getRoot());
            }
            // Remplace le contenu de la scène actuelle
            Scene currentScene = ((Node) actionEvent.getSource()).getScene();
            currentScene.setRoot(newView);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void navigateBack() {
        if (!history.isEmpty()) {
            Parent previousView = history.pop();
            primaryStage.getScene().setRoot(previousView);
        }
    }
}
