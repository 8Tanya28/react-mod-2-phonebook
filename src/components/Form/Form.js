import React, { Component } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const inputNameId = shortid.generate();
const inputNumberId = shortid.generate();
const buttonId = shortid.generate();

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handelSubmit}>
        <label htmlFor={inputNameId}>
          <span className={s.label}>Name</span>
        </label>
        <input
          className={s.input}
          autoComplete="off"
          type="text"
          name="name"
          id={inputNameId}
          value={this.state.name}
          onChange={this.handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <label htmlFor={inputNumberId}>
          <span className={s.label}>Number</span>
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          id={inputNumberId}
          value={this.state.number}
          onChange={this.handelInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <label htmlFor={buttonId}>
          <button type="submit" id={buttonId}>
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propType = {
  name: PropTypes.string,
  number: PropTypes.string,
  handelSubmit: PropTypes.func,
  inputNameId: PropTypes.string,
  inputNumberId: PropTypes.string,
  buttonId: PropTypes.string,
};

export default ContactForm;
