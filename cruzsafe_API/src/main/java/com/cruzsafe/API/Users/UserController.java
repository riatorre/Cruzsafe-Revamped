package com.cruzsafe.API.Users;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewUser (@RequestParam String fName, @RequestParam String lName, @RequestParam String email, @RequestParam User.source src){
        User n = new User();
        n.setFName(fName);
        n.setLName(lName);
        n.setEmail(email);
        n.setSource(src);
        userRepository.save(n);
        return "Saved";
    }

    // Get all users
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    // Get user by associated ID #
    @PostMapping(path = "/getUser")
    public @ResponseBody Optional<User> getUser(@RequestParam(value = "ID", defaultValue = "1") int ID){
        return userRepository.findById(ID);
    }

}
