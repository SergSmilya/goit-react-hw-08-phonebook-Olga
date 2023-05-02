import { logInUser } from 'Redux/Auth/AuthOperations';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

export default function LogIn() {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  function onHandleSubmit(values, { resetForm }) {
    dispatch(logInUser(values));
    resetForm();
  }

  return (
    <Formik onSubmit={onHandleSubmit} initialValues={initialValues}>
      <Form>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="password" type="text" />
        </label>
        <Button colorScheme="blue" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
