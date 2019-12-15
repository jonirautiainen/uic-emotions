import React from 'react'
import { AuthConsumer } from '../../Auth'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
import TextField from '@material-ui/core/TextField'

const Login = () => (
  <AuthConsumer>
    {({ login }) => (
      <div className={styles['container']}>
        <h2 className={styles['title']}>
          Welcome to Emotions
        </h2>
        <p className={styles['pg']}>Please log in</p>
        {[
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
                  />
                </div>
              ))}
              <div className={styles['button-container']}>
        <Button fullWidth variant="contained" color="primary" onClick={() => login()}>
          Login
        </Button>
        </div>

        <div className={styles['login-container']}>
          <p className={styles['pg']}>If you don't have an account</p>
          <Button component={Link} to="/signup">
          Sign up
        </Button>
        </div>
      </div>
    )}
  </AuthConsumer>
)

export default Login
