package com.cruzsafe.API.Users;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @PostMapping("/users/getUser")
    public ResponseEntity<User> getUser(@RequestParam(value = "ID", defaultValue = "1") int ID, @RequestParam(value = "SRC") User.source SRC){
        // Placeholder
        try{
            return new ResponseEntity<> (new User(ID, "Richard", "Torres", "riatorre@ucsc.edu", SRC), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<> (null, HttpStatus.BAD_REQUEST);
        }
    }
}
