import React from 'react'
import { AuthConsumer } from '../../Auth'
import { Redirect } from 'react-router-dom'
// import styles from './Public.module.scss'

const Public = ({ children }) => (
  <AuthConsumer>
    {({ user }) => (user ? <Redirect to="/" /> : children)}
  </AuthConsumer>
)

export default Public
