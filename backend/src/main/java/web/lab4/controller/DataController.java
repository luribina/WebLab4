package web.lab4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.web.bind.annotation.*;
import web.lab4.exception.DataNotValidException;
import web.lab4.model.Data;
import web.lab4.model.User;
import web.lab4.service.DataService;
import web.lab4.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("data")

public class DataController {
    private final DataService dataService;
    private final UserService userService;

    @Autowired
    public DataController(DataService dataService, UserService userService) {
        this.dataService = dataService;
        this.userService = userService;
    }

    @CrossOrigin
    @GetMapping
    Collection<Data> allPoints(Principal user) {
        return dataService.getUserData(userService.getUserByName(user.getName()));
    }

    @CrossOrigin
    @PostMapping
    Data newPoint(@RequestBody Data newPoint, Principal user) {
        if (!newPoint.validate()) throw new DataNotValidException();
        newPoint.setResult(newPoint.check());
        newPoint.setUser(userService.getUserByName(user.getName()));
        return dataService.saveUserData(newPoint);
    }

    @CrossOrigin
    @DeleteMapping
    ResponseEntity<String> deleteData(Principal user) {
        User selectedUser = userService.getUserByName(user.getName());
        dataService.deleteUserData(selectedUser);
        return new ResponseEntity<>("deleted", HttpStatus.OK);
    }


}
