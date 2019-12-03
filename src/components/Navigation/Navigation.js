import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import routes from '../../routes'

import styles from './Navigation.module.scss'

const Navigation = () => (
  <div className={styles['container']}>
    {routes
      .filter(({ authRequired }) => authRequired)
      .map(({ title, path }) => (
        <Button key={path} component={Link} to={path}>
          {title}
        </Button>
      ))}
  </div>
)

export default Navigation
