import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {SkillItem} from "./SkillItem/SkillItem";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={styleContainer.container}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skillsItemsWrapper}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

