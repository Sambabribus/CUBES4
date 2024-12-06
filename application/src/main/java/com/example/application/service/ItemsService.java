package com.example.application.service;

import com.example.application.model.Items;

public class ItemsService {
    private final String apiURL = "http://localhost:3000/api/items";
    private final HttpClientService httpClientService;

    public ItemsService() {
        this.httpClientService = new HttpClientService();
    }

    public Items createItem(Items item) {
        return httpClientService.sendPostRequest(apiURL, item, Items.class);
    }
}
