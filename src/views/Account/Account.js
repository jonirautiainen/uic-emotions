import React, { useState } from 'react'
import { AuthConsumer } from '../../Auth'
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
    {({ user, logout, handleName }) => (
      <Card>
        <form autoComplete="off" noValidate>
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
                  name="firstName"
                  onChange={handleName}
                  required
                  value={user.givenName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  required
                  value={user.familyName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  required
                  value={user.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  type="number"
                  value={user.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  margin="dense"
                  name="age"
                  type="number"
                  value={user.age}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Grid>
            <CardActions>
              <Button color="primary" variant="contained" fullWidth>
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
      </Card>
    )}
  </AuthConsumer>
)

export default Account
