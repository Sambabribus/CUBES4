package com.example.application.service;

import com.example.application.model.Orders;

import java.util.List;

public class OrdersService {
    private final String apiURL = "http://localhost:3000/api/orders";
    private final HttpClientService httpClientService;

    public OrdersService() {
        this.httpClientService = new HttpClientService();
    }

    public List<Orders> getAllOrders() {
        return httpClientService.sendGetAllRequest(apiURL, Orders.class);
    }
}
