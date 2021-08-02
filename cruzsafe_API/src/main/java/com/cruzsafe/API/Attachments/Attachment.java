package com.cruzsafe.API.Attachments;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.cruzsafe.API.Reports.Report;

// Entity class for Media attachments
// Should be the child in a One-to-Many relationship
// Holds filename to be used to extract file from filesystem volume later

@Entity
@Table(name = "attachments")
public class Attachment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attachment_id")
    private int ID;

    // Foreign Key to Parent Report
    
    @ManyToOne
    @JoinColumn(name = "report_id")
    private Report report;//*/

    private String filename;
}
