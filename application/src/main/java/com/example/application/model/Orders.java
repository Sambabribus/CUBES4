package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Orders {
    // Annotation de la librairie jackson sinon il n'arrive pas à désérialiser le nom de l'id
    @JsonProperty("Id_orders")
    private int Id_Orders;
    private Date order_date;
    private int quantity;
    @JsonProperty("Id_users")
    private int Id_User;
    private Users user;

    public Orders() {
        this.user = new Users();
    }

    public int getId_Orders() {
        return Id_Orders;
    }

    public void setId_Orders(int id_Orders) {
        id_Orders = id_Orders;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public int getId_User() {
        return Id_User;
    }

    public void setId_User(int id_User) {
        Id_User = id_User;
    }

    @Override
    public String toString() {
        return "Id orders : " + Id_Orders + " Date : " + order_date + " Quantité : " + quantity + " Id users : " + Id_User;
    }
}
