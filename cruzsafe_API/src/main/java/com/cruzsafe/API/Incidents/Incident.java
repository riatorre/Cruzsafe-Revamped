package com.cruzsafe.API.Incidents;

import com.cruzsafe.API.Reports.Report;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "incidents")
public class Incident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "incident_id")
    private int incident_Id;

    @OneToMany(mappedBy = "incident", fetch = FetchType.LAZY)
    private Set<Report> reports = new HashSet<>();
    
    public int getId(){
        return incident_Id;
    }

    public void setId(int id){
        this.incident_Id = id;
    }
}
