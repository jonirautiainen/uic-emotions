import React from 'react'
import { AuthConsumer } from '../../Auth'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

// import styles from './Account.module.scss'

const Account = () => (
  <AuthConsumer>
    {({ user, logout, updateUser }) => (
      <div>
        <h1>Account</h1>
        <Avatar>U</Avatar>
        <p>Given Name: {user.givenName}</p>
        <p>Family Name: {user.familyName}</p>
        <p>Email: {user.email}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            updateUser({
              givenName: 'Fucking',
              familyName: 'User',
              email: 'noemailyoufucker'
            })
          }
        >
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={() => logout()}>
          Logout
        </Button>
      </div>
    )}
  </AuthConsumer>
)

export default Account
