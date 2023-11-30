import { Component } from 'react';
import { FormPhoneBook } from './FormPhoneBook/FormPhonebook';
import { Contacts } from './Contacts/Contacts';
import { TestForm } from './TestForm/TestForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleSubmit = (value, { resetForm }) => {
    // evt.preventDefault();
    // const form = evt.currentTarget;
    // const nameContact = form.elements.name.value;
    // const numberContact = form.elements.number.value;
    // this.setState({
    //   contacts: [
    //     ...this.state.contacts,
    //     { name: nameContact, number: numberContact },
    //   ],
    // });
    // form.reset();

    console.log(value);
    resetForm();
  };
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
        <TestForm
          contacts={this.state.contacts}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
