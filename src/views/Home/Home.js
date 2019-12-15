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


const appendEmoji = (values, setFieldValue, emoji) => {
  setFieldValue('emojis', values.emojis+emoji)
};

const handleSubmit = (values, {resetForm}) => {
  alert("Thx XD")
  resetForm()
}

const Home = () => {
  const classes = useStyles();
return (
  <div className={styles['container']}>
    <h2>How are you feeling today?</h2>
    <Formik
      initialValues={{
        mood: 'good',
        emojis: '',
        freetext: ''
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values, handleChange, setFieldValue }) => (
        <form onSubmit={handleSubmit}>

          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
                    value={values.mood}
                    exclusive
            >
              {[
                { value: 'good', name: 'Good' },
                { value: 'neutral', name: 'Neutral' },
                { value: 'bad', name: 'Bad' }
              ].map(({ value, name }) => (
                <ToggleButton
                  key={name}
                  value={value}
                  onClick={() => {
                    setFieldValue('mood', value)
                  }}
                >
                  {name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>

          <h3>Pick emoji to represent your day:</h3>

          {[
            { emojiText: 'blush' },
            { emojiText: 'smile' },
            { emojiText: 'neutral_face' },
            { emojiText: 'unamused' },
            { emojiText: 'worried' }
          ].map(({ emojiText }) => (
            <Button
              key={emojiText}
              variant="text"
              type="button"
              onClick={() => appendEmoji(
                values,
                setFieldValue,
                emoji.getUnicode(emojiText)
              )}>
              {emoji.getUnicode(emojiText)}
            </Button>
          ))}


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
}

export default Home
