package com.example.application.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

// Ignore les champs inconnus lors du retour de la requete en JSON
@JsonIgnoreProperties(ignoreUnknown = true)
public class Users {
    @JsonProperty("Id_users")
    private int Id_users;
    private String mail;
    private String phone_number;
    private String address;
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

    @Override
    public String toString() {
        return mail;
    }
    public int getId_users() {
        return Id_users;
    }

    public void setId_users(int id_users) {
        Id_users = id_users;
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

    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
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
