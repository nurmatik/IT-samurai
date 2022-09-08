import React from "react";
import s from './Profile.module.css'
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrge_HCKw2D2VR6N0XmjnCCkNzkFbsnZiDJw&usqp=CAU'}/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className= {s.Posts}>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
            </div>
        </div>
    </div>
}

export default Profile;