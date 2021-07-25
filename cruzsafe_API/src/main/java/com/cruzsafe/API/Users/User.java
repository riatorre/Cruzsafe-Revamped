package com.cruzsafe.API.Users;

public class User {
    public enum source {
        WEB,
        MOBILE
    }

    private int ID;
    private source src;
    private String fName;
    private String lName;
    private String email;

    public User(int ID, String fName, String lName, String email){
        this.ID = ID;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.src = source.MOBILE;
    }

    public User(int ID, String fName, String lName, String email, source src){
        this.ID = ID;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.src = src;
    }

    public int getID() {
        return ID;
    }

    public String getName(){
        return fName + " " + lName;
    }

    public String getFName(){
        return fName;
    }

    public String getLName(){
        return lName;
    }

    public String getEmail(){
        return email;
    }

    public source getSource(){
        return src;
    }

}
