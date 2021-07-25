package com.cruzsafe.API.Notes;

import java.time.LocalDateTime;

public class Note {
    private int ID;
    private int reportID;
    private int userID;
    private String content;
    private LocalDateTime postedOn;

    public Note(int ID, int reportID, int userID, String content){
        this.ID = ID;
        this.reportID = reportID;
        this.userID = userID;
        this.content = content;
        this.postedOn = LocalDateTime.now();
    }

    public int getID(){
        return ID;
    }

    public int getReportID(){
        return reportID;
    }

    public int getUserID(){
        return userID;
    }

    public String getContent(){
        return content;
    }

    public LocalDateTime getPostDate(){
        return postedOn;
    }
}
