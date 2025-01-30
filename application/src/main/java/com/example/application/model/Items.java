package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {
    @JsonProperty("Id_items")
    private int id;
    private String name;
    private String alcohol_type;
    private String domain_name;
    private String millesime;
    private double purchase_price;
    private double selling_price;
    private int stock_quantity;
    private String description;

    //@JsonIgnoreProperties({"name", "adresses", "phone_number", "mail", "region", "alcohol_provided", "id_Suppliers"})
    // Ignorer les autres propriétés
    //@JsonProperty("Id_Suppliers")
    //private Suppliers supplier;

    //@JsonIgnoreProperties({"order_date", "quantity", "user", "id_User", "Id_Orders", "Id_Users"})
    // Ignorer les autres propriétés
    //@JsonProperty("Id_Orders")
    //private Orders order;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return name;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlcohol_type() {
        return alcohol_type;
    }

    public void setAlcohol_type(String alcohol_type) {
        this.alcohol_type = alcohol_type;
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
}
