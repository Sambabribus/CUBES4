package com.example.application.service;

import com.example.application.model.Orders;
import com.example.application.utils.HttpClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class OrdersServiceTest {

    private HttpClientService httpClientServiceMock;
    private OrdersService ordersService;
    private final String apiURL = "http://localhost:3000/api/orders/";

    @BeforeEach
    void setUp() {
        // Mock du service HTTP
        httpClientServiceMock = Mockito.mock(HttpClientService.class);
        // Service utilisant le mock
        ordersService = new OrdersService(httpClientServiceMock);
    }

    @Test
    void testGetAllOrders() {
        Orders order1 = new Orders();
        order1.setId_Orders(1);
        order1.setQuantity(25);

        Orders order2 = new Orders();
        order2.setId_Orders(2);
        order2.setQuantity(30);

        List<Orders> expectedOrders = Arrays.asList(order1, order2);

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendGetAllRequest(apiURL, Orders.class)).thenReturn(expectedOrders);

        // Appel de la méthode
        List<Orders> actualOrders = ordersService.getAllOrders();

        // Vérification du résultat
        assertEquals(expectedOrders, actualOrders);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendGetAllRequest(apiURL, Orders.class);
    }
}