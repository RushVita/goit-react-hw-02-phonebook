import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().min(6).max(12).required(),
});

const initialValues = {
  name: '12312',
  number: '123132',
};

export const TestForm = ({ handleSubmit }) => {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />

          <Field type="tel" name="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
