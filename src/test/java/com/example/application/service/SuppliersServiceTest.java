package com.example.application.service;

import com.example.application.model.Suppliers;
import com.example.application.utils.HttpClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SuppliersServiceTest {

    private HttpClientService httpClientServiceMock;
    private SuppliersService suppliersService;
    private final String apiURL = "http://localhost:3000/api/suppliers/";

    @BeforeEach
    void setUp() {
        // Mock du service HTTP
        httpClientServiceMock = Mockito.mock(HttpClientService.class);
        // Service utilisant le mock
        suppliersService = new SuppliersService(httpClientServiceMock);
    }

    @Test
    void testCreateSupplier() {
        Suppliers newSupplier = new Suppliers();
        newSupplier.setName("Supplier A");
        newSupplier.setMail("supplierA@example.com");

        Suppliers expectedSupplier = new Suppliers();
        expectedSupplier.setId_Suppliers(1);
        expectedSupplier.setName("Supplier A");
        expectedSupplier.setMail("supplierA@example.com");

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL, "POST", newSupplier, Suppliers.class)).thenReturn(expectedSupplier);

        // Appel de la méthode
        Suppliers createdSupplier = suppliersService.createSupplier(newSupplier);

        // Vérification du résultat
        assertEquals(expectedSupplier, createdSupplier);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendPostRequest(apiURL, "POST", newSupplier, Suppliers.class);
    }

    @Test
    void testGetAllSuppliers() {
        Suppliers supplier1 = new Suppliers();
        supplier1.setId_Suppliers(1);
        supplier1.setName("Supplier A");

        Suppliers supplier2 = new Suppliers();
        supplier2.setId_Suppliers(2);
        supplier2.setName("Supplier B");

        List<Suppliers> expectedSuppliers = Arrays.asList(supplier1, supplier2);

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendGetAllRequest(apiURL, Suppliers.class)).thenReturn(expectedSuppliers);

        // Appel de la méthode
        List<Suppliers> actualSuppliers = suppliersService.getAllSuppliers();

        // Vérification du résultat
        assertEquals(expectedSuppliers, actualSuppliers);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendGetAllRequest(apiURL, Suppliers.class);
    }
}