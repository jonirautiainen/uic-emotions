import React from 'react'
import { AuthConsumer } from '../../Auth'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

import styles from './Signup.module.scss'

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.givenName) {
    errors.givenName = 'Required'
  }
  if(!values.familyName) {
    errors.familyName = 'Required'
  }
  if(!values.password) {
    errors.password = 'Please create password'
  }

  return errors;
};

const Signup = () => (
  <AuthConsumer>
    {({ signup }) => (
      <div className={styles['container']}>
        <h2 className={styles['title']}>
          Create Account
        </h2>
        <p className={styles['pg']}>By registering, you can easily track your daily emotions and view them summarised.</p>
        <Formik
          initialValues={{
            givenName: '',
            familyName: '',
            email: '',
            password: ''
          }}
          onSubmit={values => {
            signup({
              givenName: values.givenName,
              familyName: values.familyName,
              email: values.email
            })
          }}
          validate={validate}
        >
          {({ handleSubmit, values, handleChange, errors, handleBlur, touched }) => (
            <form 
              onSubmit={handleSubmit}
              className={styles['form']}
            >
              {[
                {
                  label: 'Given Name',
                  name: 'givenName',
                  type: 'text'
                },
                {
                  label: 'Family Name',
                  name: 'familyName',
                  type: 'text'
                },
                {
                  label: 'Email',
                  name: 'email',
                  type: 'text'
                },
                {
                  label: 'Password',
                  name: 'password',
                  type: 'password'
                }
              ].map(({ label, name, type }) => (
                <div key={name} className={styles['input-container']}>
                  <TextField
                    fullWidth
                    name={name}
                    type={type}
                    label={label}
                    variant="outlined"
                    value={values[name]}
                    onChange={handleChange}
                    error={touched[name] && errors[name]}
                    helperText={touched[name] && errors[name] ? errors[name] : ''}
                    onBlur={handleBlur}
                  />
                </div>
              ))}
              <div className={styles['button-container']}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Signup
              </Button>
              </div>
            </form>
          )}
        </Formik>
        <div className={styles['login-container']}>
          <p className={styles['pg']}>If you already have an account</p>
          <Button component={Link} to="/login">
            Login
          </Button>
        </div>
      </div>
    )}
  </AuthConsumer>
)

export default Signup
