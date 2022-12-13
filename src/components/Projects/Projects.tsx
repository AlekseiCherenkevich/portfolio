import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Projects.module.css'
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={styleContainer.container}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projectsItemsWrapper}>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>

            </div>
        </div>
    );
};

export default Projects;