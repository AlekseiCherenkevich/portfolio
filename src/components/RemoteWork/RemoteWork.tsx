import React from 'react';
import style from './RemoteWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkWrapper}>
            <div className={styleContainer.container}>
                <h2>Consider variants of remote works</h2>
                <button>hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;