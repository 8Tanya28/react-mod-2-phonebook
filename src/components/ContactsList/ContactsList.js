import React from 'react';
import s from './ContactsList.module.css';
import Form from '../../components/Form';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, text, phone, recorded }) => (
        <li key={id} className={s.contact}>
          {/* <input type="checkbox" checked={recorded} 
          onChange={()=>onToggleRecorded(id)} /> */}
          <p className={s.text}>
            {text} : {phone}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
