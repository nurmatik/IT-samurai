import React from "react";
import s from './MyPosts.module.css'
import {Post} from './Post';


export const MyPosts = (props: any) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button> Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = 'Hi, haw are you?' likesCounts='0'/>
                <Post message = "it's my first post" likesCounts='23'/>


            </div>
        </div>
    )
}


