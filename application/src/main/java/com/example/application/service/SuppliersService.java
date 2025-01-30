package com.example.application.service;

import com.example.application.contracts.SuppliersInterface;
import com.example.application.model.Suppliers;

import java.util.List;

public class SuppliersService implements SuppliersInterface {
    private final String apiURL = "http://localhost:3000/api/suppliers/";
    private final HttpClientService httpClientService;

    public SuppliersService() {
        this.httpClientService = new HttpClientService();
    }

    @Override
    public Suppliers createSupplier(Suppliers supplier) {
        return httpClientService.sendPostRequest(apiURL, "POST", supplier, Suppliers.class);
    }

    @Override
    public List<Suppliers> getAllSuppliers() {
        return httpClientService.sendGetAllRequest(apiURL, Suppliers.class);
    }
}
