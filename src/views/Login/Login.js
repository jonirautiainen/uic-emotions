import React from 'react'
import { AuthConsumer } from '../../Auth'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'

const Login = () => (
  <AuthConsumer>
    {({ login }) => (
      <div className={styles['container']}>
        <Button variant="contained" color="primary" onClick={() => login()}>
          Login
        </Button>
        <Button component={Link} to="/signup">
          Go to signup
        </Button>
      </div>
    )}
  </AuthConsumer>
)

export default Login
