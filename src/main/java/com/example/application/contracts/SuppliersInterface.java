package com.example.application.contracts;

import com.example.application.model.Suppliers;

import java.util.List;

public interface SuppliersInterface {
    Suppliers createSupplier(Suppliers suppliers);
    List<Suppliers> getAllSuppliers();
}
