import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <h2>Contacts</h2>

                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>

                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;