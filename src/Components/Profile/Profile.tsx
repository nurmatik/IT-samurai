import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/Post/MyPosts";



export const Profile = () => {
    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrge_HCKw2D2VR6N0XmjnCCkNzkFbsnZiDJw&usqp=CAU' alt={'#'} />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}
