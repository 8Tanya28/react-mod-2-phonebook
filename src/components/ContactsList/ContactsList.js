import React, { Component } from 'react';
import s from './ContactsList.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {
  // console.log(deleteContact);
  return (
    <div className={s.contactsList}>
      <h2 className={s.text}>CONTACTS</h2>
      {contacts.map(contact => (
        <li className={s.contact} key={contact.id}>
          {contact.name} : {contact.number}{' '}
          <button
            type="buttun"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactsList;
