import React, { Component } from 'react';
import s from './ContactsList.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';
// import Form from '../../components/Form';

class ContactsList extends Component {
  deleteId = Id => {
    this.props.onDeleteContact(Id);
  };

  contactId = shortid.generate();

  createList = () => {
    return this.props.contacts.map(contact => {
      return (
        <li key={this.contactId} id={contact.id} className={s.contact}>
          {`${contact.name} : ${contact.phone}`}
          <button
            type="button"
            id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
ContactsList.defaultProps = {
  contacts: [],
};

export default ContactsList;
