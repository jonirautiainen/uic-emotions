import React, {useState} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import routes from '../../routes'

import styles from './Navigation.module.scss'

const useStyles = makeStyles({
  nav: {
    backgroundColor: 'white',
    boxShadow: ''
  },
});

const Navigation = ({location}) => {

  const classes = useStyles();
const [value, setValue] = useState(location.pathname);
const handleChange = (event, newValue) => {
  setValue(newValue);
};

return (

  <div className={styles['container']}>
    <BottomNavigation
      className={classes.nav}
      showLabels
      value={value} 
      onChange={handleChange}
    >
      {routes
        .filter(({ authRequired }) => authRequired)
        .map(({ title, path, icon: Icon }) => (
          <BottomNavigationAction 
            key={path} 
            component={Link} 
            to={path} 
            label={title} 
            value={path} 
            icon={<Icon/>} 
          />
        ))}
    </BottomNavigation>
  </div>

)
}
export default withRouter(Navigation)
