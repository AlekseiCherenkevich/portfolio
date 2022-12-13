import React from 'react';
import style from './ProjectItem.module.css'

const ProjectItem = () => {
    return (
        <div className={style.projectItemWrapper}>
            <div className={style.projectImg}>
                <button>Open</button>
            </div>
            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>Title</h4>
                <div className={style.projectDecription}>Description...</div>
            </div>
        </div>
    );
};

export default ProjectItem;