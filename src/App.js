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
    filter: '',
  };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id != contactId),
  //   }));
  // };
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

  // nameId = shortid.generate();

  formSubmitHendler = data => {
    this.repeatControl(data);
  };

  repeatControl = data => {
    let nameArray = [];
    nameArray = this.state.contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: shortid.generate(), name: data.name, number: data.phone },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };

  delitEl = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContact = idContact => {
    let newArrAfterDel = this.delitEl(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  render() {
    // const { contacts } = this.state;
    return (
      <div>
        <h1>PHONEBOOK</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>CONTACTS</h2>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
