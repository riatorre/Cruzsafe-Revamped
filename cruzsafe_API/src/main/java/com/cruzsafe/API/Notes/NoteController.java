package com.cruzsafe.API.Notes;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteController {
    @PostMapping("/notes/getNoteByID")
    public ResponseEntity<Note> getNote(@RequestParam(value = "ID", defaultValue = "1") int ID){
        return new ResponseEntity<>(new Note(ID, 3, 4, "Testing a New Note"), HttpStatus.OK);
    }
}
