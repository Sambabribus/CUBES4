package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Suppliers {
    @JsonProperty("Id_Suppliers")
    private int Id_Suppliers;
    private String name;
    private String adresses;
    private String phone_number;
    private String mail;
    private String region;
    private String alcohol_provided;

    public Suppliers() {

    }

    public int getId_Suppliers() {
        return Id_Suppliers;
    }

    public void setId_Suppliers(int id_Suppliers) {
        Id_Suppliers = id_Suppliers;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdresses() {
        return adresses;
    }

    public void setAdresses(String adresses) {
        this.adresses = adresses;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getAlcohol_provided() {
        return alcohol_provided;
    }

    public void setAlcohol_provided(String alcohol_provided) {
        this.alcohol_provided = alcohol_provided;
    }
    // Redéfinission du toString pour afficher les noms et non les emplacements memoires
    @Override
    public String toString () {
        return name;
    }
}
