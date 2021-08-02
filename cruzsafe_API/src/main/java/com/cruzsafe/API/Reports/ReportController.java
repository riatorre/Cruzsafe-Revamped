package com.cruzsafe.API.Reports;

import java.util.Optional;

import com.cruzsafe.API.Incidents.Incident;
import com.cruzsafe.API.Incidents.IncidentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/reports")
public class ReportController {
    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private IncidentRepository incidentRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewReport (@RequestParam String incidentDesc, @RequestParam String locationDesc, @RequestParam Boolean hasAttachment){
        Incident i = new Incident();
        i = incidentRepository.save(i);
        Report r = new Report();
        r.setDesc(incidentDesc);
        r.setLocDesc(locationDesc);
        r.setIncident(i);
        reportRepository.save(r);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Report> getAllReports(){
        return reportRepository.findAll();
    }
    
    @GetMapping(path = "/getReport")
    public @ResponseBody Optional<Report> getReport(@RequestParam(value = "ID", defaultValue = "1") int ID){
        return reportRepository.findById(ID);
    }
}
