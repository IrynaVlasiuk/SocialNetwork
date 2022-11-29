import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
    let postElement = props.posts.map(post => <Post message={post.message} likesAmount={post.likesAmount}/>)
    return (
        <div className={style.posts}>
            {postElement}
        </div>
    )
}

export default Posts;