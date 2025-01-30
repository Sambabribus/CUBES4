package com.example.application;

import com.example.application.utils.NavigationManager;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    public static void main(String[] args) {
        launch();
    }

    @Override
    public void start(Stage primaryStage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("/com/example/application/view/AdminConnectionView.fxml"));
        // Pour outre passer la connexion addmin décocher la ligne
        //FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("/com/example/application/view/homeModulesView.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 600, 500);
        primaryStage.setTitle("Choix du module");
        primaryStage.setScene(scene);
        primaryStage.show();
        NavigationManager.getInstance().setPrimaryStage(primaryStage);
    }
}