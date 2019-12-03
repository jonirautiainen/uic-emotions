import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { AuthConsumer, AuthProvider } from './Auth'
import ResetScroll from './components/ResetScroll'
import routes from './routes'

const RouteWithHelmet = ({
  user,
  layout: Layout,
  title = null,
  authRequired,
  ...route
}) =>
  authRequired && !user ? (
    <Redirect to="/login" />
  ) : (
    <>
      <Helmet titleTemplate="%s - Emotions" defaultTitle="Emotions">
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Route {...route} />
      </Layout>
    </>
  )

const App = () => (
  <AuthProvider>
    <AuthConsumer>
      {({ user }) => (
        <BrowserRouter>
          <ResetScroll>
            <Switch>
              {routes.map(route => (
                <RouteWithHelmet key={route.title} user={user} {...route} />
              ))}
            </Switch>
          </ResetScroll>
        </BrowserRouter>
      )}
    </AuthConsumer>
  </AuthProvider>
)

export default App
