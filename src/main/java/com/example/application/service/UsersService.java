package com.example.application.service;
import com.example.application.contracts.UsersInterface;
import com.example.application.model.Users;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class UsersService implements UsersInterface {
    private final String apiURL = "http://localhost:3000/api/users/";

    private final HttpClientService httpClientService;

    public UsersService() {
        this.httpClientService = new HttpClientService();
    }

    @Override
    public Users createUser(Users user) {
        return httpClientService.sendPostRequest(apiURL, user, Users.class);
    }

    @Override
    public Users loginUser(Users users) {
        try {
            return httpClientService.sendPostRequest(apiURL+"/login", users, Users.class);
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
