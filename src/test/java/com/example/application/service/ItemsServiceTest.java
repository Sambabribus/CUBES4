package com.example.application.service;

import static org.junit.jupiter.api.Assertions.*;

import com.example.application.model.Items;
import com.example.application.utils.HttpClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;

class ItemsServiceTest {

    private HttpClientService httpClientServiceMock;
    private ItemsService itemsService;
    private final String apiURL = "http://localhost:3000/api/items/";

    @BeforeEach
    void setUp() {
        // Mock du service HTTP
        httpClientServiceMock = Mockito.mock(HttpClientService.class);
        // Service utilisant le mock
        itemsService = new ItemsService(httpClientServiceMock);
    }

    @Test
    void testCreateItem() {
        Items newItem = new Items();
        newItem.setName("New Item");

        Items expectedItem = new Items();
        expectedItem.setId(1);
        expectedItem.setName("New Item");

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL, "POST", newItem, Items.class)).thenReturn(expectedItem);
        // Appel de la méthode
        Items createdItem = itemsService.createItem(newItem);

        // Vérifie que la méthode mockée est bien appelée
        assertEquals(expectedItem, createdItem);
        verify(httpClientServiceMock).sendPostRequest(apiURL, "POST", newItem, Items.class);
    }

    @Test
    void testGetAllItems() {
        Items item1 = new Items();
        item1.setId(1);
        item1.setName("Item 1");

        Items item2 = new Items();
        item2.setId(2);
        item2.setName("Item 2");

        List<Items> expectedItems = Arrays.asList(item1, item2);

        Mockito.when(httpClientServiceMock.sendGetAllRequest(apiURL, Items.class)).thenReturn(expectedItems);

        List<Items> actualItems = itemsService.getAllItems();

        assertEquals(expectedItems, actualItems);
        verify(httpClientServiceMock).sendGetAllRequest(apiURL, Items.class);
    }

    @Test
    void testSellItem() {
        Map<String, Integer> request = Map.of("itemId", 1, "quantity", 2);
        Items expectedItem = new Items();
        expectedItem.setId(1);

        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL + "sell", "POST", request, Items.class)).thenReturn(expectedItem);

        Items soldItem = itemsService.sellItem(request);

        assertEquals(expectedItem, soldItem);
        verify(httpClientServiceMock).sendPostRequest(apiURL + "sell", "POST", request, Items.class);
    }

    @Test
    void testAddItem() {
        Map<String, Integer> request = Map.of("itemId", 1, "quantity", 5);
        Items expectedItem = new Items();
        expectedItem.setId(1);

        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL + "add", "POST", request, Items.class)).thenReturn(expectedItem);

        Items addedItem = itemsService.addItem(request);

        assertEquals(expectedItem, addedItem);
        verify(httpClientServiceMock).sendPostRequest(apiURL + "add", "POST", request, Items.class);
    }

    @Test
    void testUpdateItem() {
        Items updatedItem = new Items();
        updatedItem.setId(1);
        updatedItem.setName("Updated Item");

        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL + updatedItem.getId(), "PUT", updatedItem, Items.class)).thenReturn(updatedItem);

        Items result = itemsService.updateItem(updatedItem);

        assertEquals(updatedItem, result);
        verify(httpClientServiceMock).sendPostRequest(apiURL + updatedItem.getId(), "PUT", updatedItem, Items.class);
    }

    @Test
    void testDeleteItem() {
        int itemId = 1;

        Mockito.when(httpClientServiceMock.deleteMethodById(apiURL + itemId)).thenReturn(true);

        boolean isDeleted = itemsService.deleteItem(itemId);

        assertTrue(isDeleted);
        verify(httpClientServiceMock).deleteMethodById(apiURL + itemId);
    }
}
