import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={props.img} alt=""/>
            <div>
                <button>Like</button>
                <p>{props.likesAmount}</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Post;