import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Required"),
});

export const TodoForm = (props) => {
  const handleFormSubmit = (inputText) => {
    props.handleSubmit(inputText);
  };

  return (
    <div className='form'>
      <Formik
        initialValues={{ text: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values.text);
          resetForm();
        }}>
        <Form>
          <Field name='text' type='text' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
