package com.cruzsafe.API.Reports;

import java.time.LocalDateTime;

public class Report {
    public enum status{
        RECIEVED,
        OPENED,
        CLOSED,
        REOPENED
    }

    private int ID;
    private String incidentDesc;
    private String locationDesc;
    private long locLatitude;
    private long locLongitude;
    private boolean attachment = false;
    private status curStatus = status.RECIEVED;
    private LocalDateTime lastUpdate;
    private LocalDateTime PostedOn;

    public Report(int ID, String incidentDesc, String locationDesc){
        this.ID = ID;
        this.incidentDesc = incidentDesc;
        this.locationDesc = locationDesc;
        this.PostedOn = this.lastUpdate = LocalDateTime.now();
    }

    public int getID(){
        return ID;
    }

    public String getDesc(){
        return incidentDesc;
    }

    public String getLocDesc(){
        return locationDesc;
    }

    public boolean hasAttachment(){
        return attachment;
    }

    public status getStatus(){
        return curStatus;
    }

    public LocalDateTime getLastUpdated(){
        return lastUpdate;
    }

    public LocalDateTime getPosted(){
        return PostedOn;
    }
}
