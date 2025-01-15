package com.example.application.contracts;

import com.example.application.model.Users;

import java.util.List;

public interface UsersInterface {
    Users createUser(Users users);
    Users loginUser(Users users);
    List<Users> getAllUsers();
}
