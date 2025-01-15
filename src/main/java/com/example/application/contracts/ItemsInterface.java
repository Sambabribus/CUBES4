package com.example.application.contracts;

import com.example.application.model.Items;

import java.util.List;
import java.util.Map;

public interface ItemsInterface {
    Items createItem(Items items);
    List<Items> getAllItems();
    Items sellItem(Map<String, Integer> request);
    Items addItem(Map<String, Integer> request);
}
