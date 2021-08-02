package com.cruzsafe.API.Reports;

import com.cruzsafe.API.Attachments.Attachment;
import com.cruzsafe.API.Incidents.Incident;
import com.cruzsafe.API.Users.User;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

// Attachments will be recorded in a separate table with a foreign key pointing to the report

@Entity
@Table(name = "reports")
public class Report {
    public enum Status{
        RECIEVED,
        OPENED,
        CLOSED,
        REOPENED
    }

    // Generated Values
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private int report_id; //Primary Key

    // Request Inputs
    private String incidentDesc;
    private String locationDesc;
    // To be implemented/updated
    //private long locLatitude;
    //private long locLongitude;

    // System-defined/manipulated
    @Column(name = "STATUS", columnDefinition = "varchar(8) default 'RECIEVED'")
    private Status status = Status.RECIEVED;
    @UpdateTimestamp
    private Timestamp lastUpdate;
    @CreationTimestamp
    private Timestamp PostedOn;

    @OneToMany(mappedBy = "report", fetch = FetchType.LAZY)
    private Set<Attachment> attachments = new HashSet<>();//*/

    // Foreign Key to User who submitted report
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;//*/

    // Foreign Key to Incident
    @ManyToOne
    @JoinColumn(name = "incident_id")
    private Incident incident;

    public int getID(){
        return report_id;
    }

    public void setID(int ID){
        this.report_id = ID;
    }

    public Incident getIncident(){
        return incident;
    }

    public void setIncident(Incident incident){
        this.incident = incident;
    }

    public String getDesc(){
        return incidentDesc;
    }

    public void setDesc(String desc){
        this.incidentDesc = desc;
    }

    public String getLocDesc(){
        return locationDesc;
    }

    public void setLocDesc(String desc){
        this.locationDesc = desc;
    }

    public Status getStatus(){
        return status;
    }

    public void setStatus(Status status){
        this.status = status;
    }

    public Timestamp getLastUpdated(){
        return lastUpdate;
    }

    public Timestamp getPosted(){
        return PostedOn;
    }
}
