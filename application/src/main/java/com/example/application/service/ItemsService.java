package com.example.application.service;

import com.example.application.contracts.ItemsInterface;
import com.example.application.model.Items;

import java.util.List;
import java.util.Map;

public class ItemsService implements ItemsInterface {
    private final String apiURL = "http://localhost:3000/api/items/";
    private final HttpClientService httpClientService;

    public ItemsService() {
        this.httpClientService = new HttpClientService();
    }

    @Override
    public Items createItem(Items item) {
        return httpClientService.sendPostRequest(apiURL, "POST", item, Items.class);
    }

    @Override
    public List<Items> getAllItems() {
        return httpClientService.sendGetAllRequest(apiURL, Items.class);
    }

    @Override
    public Items sellItem(Map<String, Integer> request) {
        return httpClientService.sendPostRequest(apiURL + "sell", "POST", request, Items.class);
    }

    @Override
    public Items addItem(Map<String, Integer> request) {
        return httpClientService.sendPostRequest(apiURL + "add", "POST", request, Items.class);
    }

    @Override
    public Items updateItem(Items items) {
        System.out.println(apiURL + items.getId());
        return httpClientService.sendPostRequest(apiURL + items.getId(), "PUT", items, Items.class);
    }

    @Override
    public boolean deleteItem(int itemId) {
        return httpClientService.deleteMethodById(apiURL + itemId);
    }
}
