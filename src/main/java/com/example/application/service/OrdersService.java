package com.example.application.service;

import com.example.application.contracts.OrdersInterface;
import com.example.application.model.Orders;
import com.example.application.utils.HttpClientService;

import java.util.List;

public class OrdersService implements OrdersInterface {
    private final String apiURL = "http://localhost:3000/api/orders/";
    private final HttpClientService httpClientService;

    public OrdersService() {
        this.httpClientService = new HttpClientService();
    }

    public OrdersService(HttpClientService httpClientService) {
        this.httpClientService = httpClientService;
    }

    @Override
    public List<Orders> getAllOrders() {
        return httpClientService.sendGetAllRequest(apiURL, Orders.class);
    }
}
