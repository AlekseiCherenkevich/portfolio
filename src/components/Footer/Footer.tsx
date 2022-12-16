import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <h2>Alex Cherenkevich</h2>
                <div className={style.socialMediaWrapper}>
                    <div className={style.socialMediaItem}></div>
                    <div className={style.socialMediaItem}></div>
                    <div className={style.socialMediaItem}></div>
                    <div className={style.socialMediaItem}></div>
                </div>
                <div className={style.info}>2019 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;