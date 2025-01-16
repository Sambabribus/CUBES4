package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {
    @JsonProperty("Id_items")
    private int id;
    private String name;
    @JsonProperty("alcohol_type")
    private String alcoholType;
    @JsonProperty("domain_name")
    private String domainName;
    private String millesime;
    @JsonProperty("purchase_price")
    private double purchasePrice;
    @JsonProperty("selling_price")
    private double sellingPrice;
    @JsonProperty("stock_quantity")
    private int stockQuantity;
    private String description;

    @JsonIgnoreProperties({"name", "adresses", "phone_number", "mail", "region", "alcohol_provided", "id_Suppliers"})  // Ignorer les autres propriétés
    //@JsonProperty("Id_Suppliers")
    private Suppliers supplier;

    @JsonIgnoreProperties({"order_date", "quantity", "user", "id_User", "Id_Orders", "Id_Users"})  // Ignorer les autres propriétés
    //@JsonProperty("Id_Orders")
    private Orders order;

    public Items() {

    }

    public int getId() {
        return id;
    }

    public void setId_Items(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlcoholType() {
        return alcoholType;
    }

    public void setAlcoholType(String alcoholType) {
        this.alcoholType = alcoholType;
    }

    public String getDomainName() {
        return domainName;
    }

    public void setDomainName(String domainName) {
        this.domainName = domainName;
    }

    public String getMillesime() {
        return millesime;
    }

    public void setMillesime(String millesime) {
        this.millesime = millesime;
    }

    public double getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(double purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public double getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(double sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
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
