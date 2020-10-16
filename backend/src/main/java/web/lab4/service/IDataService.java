package web.lab4.service;

import web.lab4.model.Data;
import web.lab4.model.User;

import java.util.List;


public interface IDataService {
    List<Data> getUserData(User user);

    Data saveUserData(Data data);

    void deleteUserData(User user);
}
