package com.example.application.service;
import com.example.application.model.Users;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class UsersService {
    private final String apiURL = "http://localhost:3000/api/users";

    private final HttpClientService httpClientService;

    public UsersService() {
        this.httpClientService = new HttpClientService();
    }
    public Users createUser(Users user) {
        return httpClientService.sendPostRequest(apiURL, user, Users.class);
    }
}
