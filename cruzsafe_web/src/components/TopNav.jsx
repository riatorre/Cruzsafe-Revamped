import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Authenticator from "../components/Authenticator"
import logo from '../assets/imgs/CruzSafeMain.png';
import { LogOutOutline } from 'react-ionicons';


class TopNav extends Component {
    state = {
        signout: false
    }

    signout = () => {
        Authenticator.signout( () => 
            {
                this.setState( 
                    () => (
                        {
                            signout: true
                        }
                    )
                )
            }
        )
    }

    render(){
        const { signout } = this.state;

        if(signout){
            return <Redirect to={"/"} />
        }
        return(
            <div>
                <div className="logoBar">
                    <img src={logo} alt=""></img>
                </div>
                <ul className="navBar">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/reports">Reports</NavLink></li>
                    <li><NavLink to="/analytics">Analytics</NavLink></li>
                    <li><NavLink to="/admin">Admin</NavLink></li>
                    <li>
                        <div>
                        <LogOutOutline 
                            cssClasses="navbar_icons"
                            onClick = {Authenticator.signout}
                        />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default TopNav;