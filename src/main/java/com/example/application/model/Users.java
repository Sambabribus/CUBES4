package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;

// Ignore les champs inconnus lors du retour de la requete en JSON
@JsonIgnoreProperties(ignoreUnknown = true)
public class Users {
    private int Id_Users;
    private String mail;
    private String phone_number;
    private String adresses;
    private String username;
    private String password;
    private String first_name;
    private String gender;
    private String last_name;
    private LocalDate birthday;

    // Initialisation d'un constructeur sans arguments (constructeur par defaut)
    // Souvent utilisé par les framework de serialisation/désérialisation (Jackson)
    // Permet de creer des instances de classes sans avoir à fournir des valeurs initiales
    public Users() {

    }


    public int getId_Users() {
        return Id_Users;
    }

    public void setId_Users(int id_Users) {
        Id_Users = id_Users;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getAdresses() {
        return adresses;
    }

    public void setAdresses(String adresses) {
        this.adresses = adresses;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthdate) {
        this.birthday = birthdate;
    }
}
