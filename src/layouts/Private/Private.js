import React from 'react'
import styles from './Private.module.scss'
import Navigation from '../../components/Navigation'
const Private = ({ children }) => (
  <>
    <Navigation />
    <div className={styles['container']}>{children}</div>
  </>
)

export default Private
