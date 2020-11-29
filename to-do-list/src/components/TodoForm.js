import React from "react";
import { Formik, Field, Form } from "formik";

export const TodoForm = (props) => {
  const handleFormSubmit = (inputText) => {
    props.handleSubmit(inputText);
  };

  return (
    <div className='form'>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values.text);
          resetForm();
        }}>
        <Form>
          <Field name='text' type='text' />
          <button type='submit'>Add todo</button>
          <button
            type='button'
            className='sort'
            onClick={() => {
              props.handleAscSort();
            }}>
            Sort by Oldest
          </button>
          <button
            type='button'
            className='sort'
            onClick={() => {
              props.handleDescSort();
            }}>
            Sort by Latest
          </button>
        </Form>
      </Formik>
    </div>
  );
};
