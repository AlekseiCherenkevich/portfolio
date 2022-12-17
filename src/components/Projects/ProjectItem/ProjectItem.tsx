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
                <p className={style.projectDecription}>Description...</p>
            </div>
        </div>
    );
};

export default ProjectItem;