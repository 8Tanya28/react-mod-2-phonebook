import React, { Component } from 'react';
import s from './App.css';
import shortid from 'shortid';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { PropTypes } from 'prop-types';
import { contacts } from './components/ContactsList/contacts.js';

const contactId = shortid.generate();

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  onSubmitHendler = data => {
    const contact = {
      id: contactId,
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    for (const contact of this.state.contacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(contact.name)) {
      alert(`${contact.name} is already in contacts list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterName = event => {
    console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };

  delete = contactId => {
    // console.log(contactId);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filterNormilized = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );

    return (
      <>
        <div className={s.container}>
          <h1>PHONEBOOK</h1>
          <Form onSubmitForm={this.onSubmitHendler} />
          <Filter value={this.state.filter} onChengeFilter={this.filterName} />
          <ContactsList
            contacts={visibleContacts}
            deleteContact={this.delete}
          />
        </div>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onSubmitHendler: PropTypes.func,
  delete: PropTypes.func,
  filterName: PropTypes.func,
};

export default App;
