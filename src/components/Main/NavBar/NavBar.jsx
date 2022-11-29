import React from "react";
import style from "./NavBar.module.css";
import homeIcon from "./assets/home.png";
import friendsIcon from "./assets/friends.png";
import messagesIcon from "./assets/messages.png";
import videosIcon from "./assets/videos.png";
import picturesIcon from "./assets/pictures.png";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <section className={style.navBar}>
            <div className={style.menu}>
                <NavLink to="/home">
                    <img src={homeIcon} alt=""/>
                </NavLink>
                <NavLink to="/friends">
                    <img src={friendsIcon} alt=""/>
                </NavLink>
                <NavLink to="/messages">
                    <img src={messagesIcon} alt=""/>
                </NavLink>
                <NavLink to="/videos">
                    <img src={videosIcon} alt=""/>
                </NavLink>
                <NavLink to="/pictures">
                    <img src={picturesIcon} alt=""/>
                </NavLink>
            </div>
        </section>
    )
}

export default NavBar;