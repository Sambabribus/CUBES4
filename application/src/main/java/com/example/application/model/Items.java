package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {
    private int Id_Items;
    private String name;
    private String type_alcohol;
    private String domain_name;
    private String millesime;
    private double purchase_price;
    private double selling_price;
    private int stock_quantity;
    private String description;

    @JsonIgnoreProperties({"name", "adresses", "phone_number", "mail", "region", "alcohol_provided", "id_Suppliers"})  // Ignorer les autres propriétés
    //@JsonProperty("Id_Suppliers")
    private Suppliers supplier;

    @JsonIgnoreProperties({"order_date", "quantity", "user", "id_User", "Id_Orders", "Id_Users"})  // Ignorer les autres propriétés
    //@JsonProperty("Id_Orders")
    private Orders order;

    public Items() {

    }

    public int getId_Items() {
        return Id_Items;
    }

    public void setId_Items(int id_Items) {
        Id_Items = id_Items;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType_alcohol() {
        return type_alcohol;
    }

    public void setType_alcohol(String type_alcohol) {
        this.type_alcohol = type_alcohol;
    }

    public String getDomain_name() {
        return domain_name;
    }

    public void setDomain_name(String domain_name) {
        this.domain_name = domain_name;
    }

    public String getMillesime() {
        return millesime;
    }

    public void setMillesime(String millesime) {
        this.millesime = millesime;
    }

    public double getPurchase_price() {
        return purchase_price;
    }

    public void setPurchase_price(double purchase_price) {
        this.purchase_price = purchase_price;
    }

    public double getSelling_price() {
        return selling_price;
    }

    public void setSelling_price(double selling_price) {
        this.selling_price = selling_price;
    }

    public int getStock_quantity() {
        return stock_quantity;
    }

    public void setStock_quantity(int stock_quantity) {
        this.stock_quantity = stock_quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Suppliers getSupplier() {
        return supplier;
    }

    public void setSupplier(Suppliers supplier) {
        this.supplier = supplier;
    }

    public Orders getOrder() {
        return order;
    }

    public void setOrder(Orders order) {
        this.order = order;
    }
}
