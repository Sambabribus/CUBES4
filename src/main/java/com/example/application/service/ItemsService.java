package com.example.application.service;

import com.example.application.model.Items;
import java.util.List;

public class ItemsService {
    private final String apiURL = "http://localhost:3000/api/items";
    private final HttpClientService httpClientService;

    public ItemsService() {
        this.httpClientService = new HttpClientService();
    }

    // Créer un nouvel article
    public Items createItem(Items item) {
        return httpClientService.sendPostRequest(apiURL, item, Items.class);
    }

    // Récupérer la liste de tous les articles
    public List<Items> getAllItems() {
        return httpClientService.sendGetAllRequest(apiURL, Items.class);
    }

    // Mettre à jour un article existant
    //TODO
    public Items updateItem(Items item) {
        String updateUrl = apiURL  +"/"+ item.getId();
        return httpClientService.sendPostRequest(updateUrl, item, Items.class);
    }

    // Supprimer un article
    public void deleteItem(int itemId) {
        try {
            String deleteUrl = apiURL + "/" + itemId;
            httpClientService.sendDeleteRequest(deleteUrl);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la suppression de l'article", e);
        }
    }
}
