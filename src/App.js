import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import { contacts } from './components/ContactsList/contacts.js';
console.log(contacts);
class App extends Component {
  state = {
    contacts,
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id != contactId),
    }));
  };
  // toggleRecorded = contactId => {
  //   console.log(contactId);
  //   // this.setState(prevState => ({
  //   //   contacts: prevState.contacts.map(contact => {
  //   //     if (contact.id === contactId) {
  //   //       console.log('find');
  //   //       return { ...contact, recorded: !contact.recorded };
  //   //     }
  //   //     return contact;
  //   //   }),
  //   // }));

  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.map(contact =>
  //       contact.id === contactId
  //         ? { ...contact, recorded: !contact.recorded }
  //         : contact
  //     ),
  //   }));
  // };

  formSubmitHendler = text => {
    // setTimeout(()=>{
    console.log(text);
    // }, 1000 )

    const newContact = {
      id: shortid.generate(),
      text,
      recorded: false,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    // const { contacts } = this.state;
    return (
      <div>
        <h1>PHONEBOOK</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
          // onToggleRecorded={this.toggleRecorded}
        />
      </div>
    );
  }
}

export default App;
