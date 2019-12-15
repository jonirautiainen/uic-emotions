import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import styles from './Home.module.scss'

const emoji = require('emoji-dictionary')

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

function appendEmoji(emoji) {
  console.log(emoji);
};

function ToggleButtons() {
  const [emotion, setEmotion] = React.useState('good');
  const handleClick = (event, newEmotion) => {
    setEmotion(newEmotion)
  };

  const classes = useStyles();
  return(
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
                  value={emotion}
                  exclusive
                  onChange={handleClick}
          >
            <ToggleButton value="good">
                Good
              </ToggleButton>
              <ToggleButton value="neutral">
                Neutral
              </ToggleButton>
              <ToggleButton value="bad">
                Bad
              </ToggleButton>
          </ToggleButtonGroup>
        </div>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
    <h2>How was your day? {emoji.getUnicode('smile')}</h2>
    <Formik
      initialValues={{
        mood: '',
        emojis: '',
        freetext: ''
      }}
      onSubmit={values => {
        console.log(values.emojis, values.freetext, values)
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          { ToggleButtons() }
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('blush')}
          </Button>
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('smile')}
          </Button>
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('relaxed')}
          </Button>
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('neutral_face')}
          </Button>
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('unamused')}
          </Button>
          <Button variant="text" type="button" onClick="">
            {emoji.getUnicode('worried')}
          </Button>
          {[
            {
              label: 'Emoji field',
              name: 'emojis',
              type: 'text'
            },
            {
              label: 'Free text',
              name: 'freetext',
              type: 'text'
            }
          ].map(({ label, name, type }) => (
            <div key={name} className={styles['input-container']}>
              <TextField
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
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </div>
)

export default Home
