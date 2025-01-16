package com.example.application.service;

import org.controlsfx.control.Notifications;
import javafx.util.Duration;

public class NotificationService {

    public static void showNotification(String title, String text) {
        Notifications.create()
                .title(title)
                .text(text)
                .hideAfter(Duration.seconds(5))
                .show();
    }

    public static void showConfirmNotification(String title, String text) {
        Notifications.create()
                .title(title)
                .text(text)
                .hideAfter(Duration.seconds(5))
                .showConfirm();
    }

    public static void showErrorNotification(String title, String text) {
        Notifications.create()
                .title(title)
                .text(text)
                .hideAfter(Duration.seconds(5))
                .showError();
    }

    public static void showInformationNotification(String title, String text) {
        Notifications.create()
                .title(title)
                .text(text)
                .hideAfter(Duration.seconds(5))
                .showInformation();
    }

    public static void showWarningNotification(String title, String text) {
        Notifications.create()
                .title(title)
                .text(text)
                .hideAfter(Duration.seconds(5))
                .showWarning();
    }
}
