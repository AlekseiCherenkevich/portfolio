import React from "react";
import style from './SkillItem.module.css'

export const SkillItem = () => {
    return <div className={style.skillWrapper}>
        <div className={style.skillImg}></div>
        <h4>React</h4>
        <div className={style.description}>
            skill's description
        </div>
    </div>
}