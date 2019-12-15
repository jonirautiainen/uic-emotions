import React from 'react'
import { AuthConsumer } from '../../Auth'
import { Formik } from 'formik'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core'

const Account = () => (
  <AuthConsumer>
    {({ user, logout, updateUser }) => (
      <Card>
        <Formik
      initialValues={{
        givenName: user.givenName || '',
        familyName: user.familyName || '',
        email: user.email || '',
        phone: user.phone || '',
        age: user.age ||'',
        sex: user.sex || ''
      }}
      onSubmit={(values) => {
        updateUser({
          givenName: values.givenName,
          familyName: values.familyName,
          email: values.email,
          phone: values.phone,
          age: values.age,
          sex: values.sex
        })
      }}
    >
      {({ handleSubmit, values, handleChange, setFieldValue }) => (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  margin="dense"
                  name="givenName"
                  onChange={handleChange}
                  required
                  value={values.givenName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="familyName"
                  required
                  value={values.familyName}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  required
                  value={values.email}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Select margin="dense" fullWidth variant="outlined" name='sex' value={values.sex} onChange={handleChange} displayEmpty>
                  <MenuItem value="">
                    Select sex
                  </MenuItem>
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  type="number"
                  value={values.phone}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  margin="dense"
                  name="age"
                  type="number"
                  value={values.age}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Grid>
            <CardActions>
              <Button type='submit' color="primary" variant="contained" fullWidth>
                Save details
              </Button>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => logout()}
              >
                Log out
              </Button>
            </CardActions>
          </Grid>
        </form>
        )}
        </Formik>
      </Card>
    )}
  </AuthConsumer>
)

export default Account
