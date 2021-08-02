package com.cruzsafe.API.Users;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.cruzsafe.API.Reports.Report;

@Entity
@Table(name = "users")
public class User {
    public enum source {
        WEB,
        MOBILE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int ID;
    
    private String firstname;
    private String lastname;
    private String email;
    private source src;

    @OneToMany(mappedBy = "user")
    private Set<Report> reports = new HashSet<>();//*/

    public int getID() {
        return ID;
    }
    

    public void setId(Integer ID) {
        this.ID = ID;
    }

    public String getFName(){
        return firstname;
    }

    public void setFName(String fName){
        this.firstname = fName;
    }

    public String getLName(){
        return lastname;
    }

    public void setLName(String lName){
        this.lastname = lName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public source getSource(){
        return src;
    }

    public void setSource(source src){
        this.src = src;
    }

}
