package com.cruzsafe.API.Reports;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {
    @PostMapping("/reports/getReport")
    public ResponseEntity<Report> getReport(@RequestParam(value = "ID", defaultValue = "1") int ID){
        return new ResponseEntity<> (new Report(ID, "Light is Broken", "Bedroom"), HttpStatus.OK);
    }
}
