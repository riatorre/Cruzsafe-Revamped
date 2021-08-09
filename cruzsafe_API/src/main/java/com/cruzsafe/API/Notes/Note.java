package com.cruzsafe.API.Notes;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.cruzsafe.API.Reports.Report;
import com.cruzsafe.API.Users.User;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private int note_Id;

    @ManyToOne
    @JoinColumn(name = "report_id")
    private Report report;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String content;

    @CreationTimestamp
    private Timestamp postedOn;

    public int getID(){
        return note_Id;
    }

    public void setID(int Id){
        this.note_Id = Id;
    }

    public Report getReport(){
        return report;
    }

    public void setReport(Report report){
        this.report = report;
    }

    public User getUser(){
        return user;
    }

    public void setUser(User user){
        this.user = user;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public Timestamp getPostDate(){
        return postedOn;
    }
}
