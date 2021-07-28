package com.cruzsafe.API.Users;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    public enum source {
        WEB,
        MOBILE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)//*/
    private int ID;
    
    private String firstname;
    private String lastname;
    private String email;
    private source src;

    
    /*public User(int ID, String fName, String lName, String email){
        this.ID = ID;
        this.firstname = fName;
        this.lastname = lName;
        this.email = email;
        this.src = source.MOBILE;
    }

    public User(int ID, String fName, String lName, String email, source src){
        this.ID = ID;
        this.firstname = fName;
        this.lastname = lName;
        this.email = email;
        this.src = src;
    }//*/

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
