package com.cruzsafe.API.Notes;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/notes")
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewNote ( @RequestParam int user_id, @RequestParam int report_id, @RequestParam String content){
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    @GetMapping(path = "/getNote")
    public @ResponseBody Optional<Note> getNote(@RequestParam int ID){
        return noteRepository.findById(ID);
    }
}
