import { Contacts } from 'components/Contacts/Contacts';
import { Component } from 'react';

export class FormPhoneBook extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" required />
          <button>Add contact</button>
        </form>
        <Contacts initialName={this.props.name} />
      </div>
    );
  }
}
