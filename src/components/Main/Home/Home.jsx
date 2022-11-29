import React from "react";
import style from "./Home.module.css";
import Posts from "./Posts/Posts";

const Home = (props) => {
    return (
        <section className={style.home}>
            <Posts posts={props.store.posts}/>
        </section>
    )
}

export default Home;