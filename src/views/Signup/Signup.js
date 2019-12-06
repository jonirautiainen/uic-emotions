import React from 'react'
import { AuthConsumer } from '../../Auth'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

import styles from './Signup.module.scss'

const Signup = () => (
  <AuthConsumer>
    {({ signup }) => (
      <div className={styles['container']}>
        <h1>SIGNUP</h1>
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
        >
          {({ handleSubmit, values, handleChange }) => (
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
                  />
                </div>
              ))}
              <Button variant="contained" color="primary" type="submit">
                Signup
              </Button>
            </form>
          )}
        </Formik>

        <Button component={Link} to="/login">
          Go to login
        </Button>
      </div>
    )}
  </AuthConsumer>
)

export default Signup
