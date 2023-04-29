import { signupUser } from 'Redux/Auth/AuthOperations';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

export default function Register() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(signupUser(values));
    resetForm();
  }
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <label>
          Name
          <Field name="name" type="text" />
        </label>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="password" type="text" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
