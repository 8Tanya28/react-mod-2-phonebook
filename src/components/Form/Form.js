import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
    priority: 'hight',
    consent: false,
  };

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = { text: this.state.name, phone: this.state.phone };
    this.props.onSubmit(data);
    this.reset();
  };

  hendleConsentChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ consent: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.phoneInputId}>
          Namber
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            id={this.phoneInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" disabled={!this.state.consent}>
          Add contact
        </button>

        <label>
          <input
            type="checkbox"
            name="consent"
            checked={this.state.consent}
            onChange={this.hendleConsentChange}
          />
          Consent
        </label>

        <p>Priority</p>
        <label>
          <input
            type="radio"
            name="priority"
            value="hight"
            onChange={this.handleChange}
            checked={this.state.priority === 'hight'}
          />
          Hight
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="average"
            onChange={this.handleChange}
            checked={this.state.priority === 'average'}
          />
          Average
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="low"
            onChange={this.handleChange}
            checked={this.state.priority === 'low'}
          />
          Low
        </label>
      </form>
    );
  }
}
export default Form;
