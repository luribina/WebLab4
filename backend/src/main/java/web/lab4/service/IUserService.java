package web.lab4.service;

import web.lab4.model.User;

public interface IUserService {
    User saveNewUser(User user);

    User getUserByName(String name);
}
