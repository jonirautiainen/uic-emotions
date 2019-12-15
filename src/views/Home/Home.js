import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { AuthConsumer } from '../../Auth'

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

const Home = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
return (
  <AuthConsumer>
    {({ reportsToday, addReport }) => (
  <div className={styles['container']}>
    {reportsToday > 0 && <p style={{color: 'green'}}>You have submitted {reportsToday} reports today, feel free to add more!</p>}
    {submitted ?
      <>
      <h2>Thank you for submitting!</h2>
      <Button variant="contained" color="primary" type="submit" onClick={() => {setSubmitted(false)}}>
      Submit more
      </Button>
      </>
      : (
      <>
    <h2>How are you feeling today?</h2>
    <Formik
      initialValues={{
        mood: 'good',
        emojis: '',
        freetext: ''
      }}
      onSubmit={(values, {resetForm}) => {
        addReport()
        setSubmitted(true);
        resetForm()
      }}
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
              style={{ fontSize: '32px'}}
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
            Submit
          </Button>
        </form>
      )}
    </Formik>
    </>
  )}
  </div>
      )}
      </AuthConsumer>
)
}

export default Home
