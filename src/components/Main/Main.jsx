import React from "react";
import style from "./Main.module.css";
import SideBar from "./SideBar/SideBar";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";

const Main = (props) => {
    return (
        <main className={style.main}>
            {props.children}
        </main>
    )
}

export default Main;