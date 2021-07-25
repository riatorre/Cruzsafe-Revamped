package com.cruzsafe.API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class APIApplication {

	public static void main(String[] args) {
		SpringApplication.run(APIApplication.class, args);
	}

	@GetMapping("/hello")
	public @ResponseBody ResponseEntity<String> hello(@RequestParam(value = "name", defaultValue = "World") String name){
		return new ResponseEntity<String>("Hello " + name, HttpStatus.OK);
	}
}
