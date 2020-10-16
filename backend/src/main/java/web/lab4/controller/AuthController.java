package web.lab4.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.lab4.exception.UserAlreadyExistsException;
import web.lab4.model.User;
import web.lab4.service.IUserService;

import java.security.Principal;

@RestController
@RequestMapping("auth")
public class AuthController {
    private final IUserService userService;

    @Autowired
    public AuthController(IUserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/register")
    ResponseEntity<String> register(@RequestBody User user) {
        User newUser = userService.getUserByName(user.getUsername());
        if (newUser != null) throw new UserAlreadyExistsException();
        userService.saveNewUser(user);
        return new ResponseEntity<>("user was registered", HttpStatus.OK);
    }


    @CrossOrigin
    @RequestMapping("/login")
    public Principal user(Principal principal) {
        System.out.println(principal.getName() + " received");
        return principal;
    }

}
