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
        onSubmit={(values) => {
          handleFormSubmit(values.text);
        }}>
        <Form>
          <Field name='text' type='text' />
          <button type='submit'>Add todo</button>
          <button
            type='button'
            className='sort'
            onClick={() => {
              props.HandleAscSort();
            }}>
            Sort by Oldest
          </button>
          <button
            type='button'
            className='sort'
            onClick={() => {
              props.HandleDescSort();
            }}>
            Sort by Latest
          </button>
        </Form>
      </Formik>
    </div>
  );
};
