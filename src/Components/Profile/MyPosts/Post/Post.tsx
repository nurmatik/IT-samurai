import React from "react";
import s from './Post.module.css'


export const Post = (props: any) => {

    return (
        <div>
            <div className={s.item}>
                <img src='https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png' alt={'#'}/>
                { props.message }
                <div>
                    <span>like</span> {props.likesCounts}
                </div>
            </div>
        </div>
    )
}
