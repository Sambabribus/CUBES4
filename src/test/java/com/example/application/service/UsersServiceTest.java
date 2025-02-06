package com.example.application.service;

import com.example.application.model.Users;
import com.example.application.utils.HttpClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UsersServiceTest {

    private HttpClientService httpClientServiceMock;
    private UsersService usersService;
    private final String apiURL = "http://localhost:3000/api/users/";

    @BeforeEach
    void setUp() {
        // Mock du service HTTP
        httpClientServiceMock = Mockito.mock(HttpClientService.class);
        // Service utilisant le mock
        usersService = new UsersService(httpClientServiceMock);
    }

    @Test
    void testCreateUser() {
        Users newUser = new Users();
        newUser.setLast_name("John Doe");
        newUser.setMail("john@example.com");

        Users expectedUser = new Users();
        expectedUser.setId_users(1);
        expectedUser.setLast_name("John Doe");
        expectedUser.setMail("john@example.com");

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL, "POST", newUser, Users.class)).thenReturn(expectedUser);

        // Appel de la méthode
        Users createdUser = usersService.createUser(newUser);

        // Vérification du résultat
        assertEquals(expectedUser, createdUser);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendPostRequest(apiURL, "POST", newUser, Users.class);
    }

    @Test
    void testLoginUser() {
        Users loginUser = new Users();
        loginUser.setMail("john@example.com");
        loginUser.setPassword("password123");

        Users expectedUser = new Users();
        expectedUser.setId_users(1);
        expectedUser.setMail("john@example.com");

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendPostRequest(apiURL + "login", "POST", loginUser, Users.class)).thenReturn(expectedUser);

        // Appel de la méthode
        Users loggedUser = usersService.loginUser(loginUser);

        // Vérification du résultat
        assertEquals(expectedUser, loggedUser);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendPostRequest(apiURL + "login", "POST", loginUser, Users.class);
    }

    @Test
    void testGetAllUsers() {
        Users user1 = new Users();
        user1.setId_users(1);
        user1.setLast_name("John Doe");

        Users user2 = new Users();
        user2.setId_users(2);
        user2.setLast_name("Jane Doe");

        List<Users> expectedUsers = Arrays.asList(user1, user2);

        // Simulation de l'appel HTTP
        Mockito.when(httpClientServiceMock.sendGetAllRequest(apiURL, Users.class)).thenReturn(expectedUsers);

        // Appel de la méthode
        List<Users> actualUsers = usersService.getAllUsers();

        // Vérification du résultat
        assertEquals(expectedUsers, actualUsers);

        // Vérifie que la méthode mockée est bien appelée
        Mockito.verify(httpClientServiceMock).sendGetAllRequest(apiURL, Users.class);
    }
}