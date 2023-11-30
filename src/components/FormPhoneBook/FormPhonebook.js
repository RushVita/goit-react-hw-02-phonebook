import { Component } from 'react';
// import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';



export class FormPhoneBook extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" required />
          <input type="tel" name="number" required />
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
