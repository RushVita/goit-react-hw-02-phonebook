import { Component } from 'react';
import { FormPhoneBook } from './FormPhoneBook/FormPhonebook';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
   
    this.setState({ name: name });
    form.reset();
  };
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook
          handleSubmit={this.handleSubmit}
          name={this.state.name}
        />
        <Contacts name={this.state.name} />
      </div>
    );
  }
}
