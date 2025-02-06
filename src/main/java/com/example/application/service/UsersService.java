package com.example.application.service;

import com.example.application.contracts.UsersInterface;
import com.example.application.model.Users;
import com.example.application.utils.HttpClientService;

import java.util.List;

public class UsersService implements UsersInterface {
    private final String apiURL = "http://localhost:3000/api/users/";

    private final HttpClientService httpClientService;

    public UsersService() {
        this.httpClientService = new HttpClientService();
    }
    // Constructeur pour les tests
    public UsersService(HttpClientService httpClientService) {
        this.httpClientService = httpClientService;
    }

    @Override
    public Users createUser(Users user) {
        return httpClientService.sendPostRequest(apiURL, "POST", user, Users.class);
    }

    @Override
    public Users loginUser(Users users) {
        try {
            return httpClientService.sendPostRequest(apiURL + "login", "POST", users, Users.class);
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<Users> getAllUsers() {
        return httpClientService.sendGetAllRequest(apiURL, Users.class);
    }
}
