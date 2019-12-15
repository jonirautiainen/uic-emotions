import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const exampleUser = {
  givenName: 'Pekka',
  familyName: 'Pouta',
  email: 'pekka.pouta@mtv.fi',
  phone: '',
  age: '',
  sex: 'male'
}

class AuthProvider extends Component {
  state = {
    user: null,
    reportsToday: 0
  }

  // Automatically log in if user in LocalStorage
  componentDidMount = () => {
    const user = this.getUserFromLocalStorage()
    this.setState({ user: user })
  }

  getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    } else {
      return null
    }
  }

  putUserToLocalStorage = user => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
  }

  logout = () => {
    this.removeUserFromLocalStorage()
    this.setState({ user: null })
  }

  login = () => {
    const user = this.getUserFromLocalStorage() || exampleUser
    this.setState({ user: user })
  }

  signup = user => {
    console.log(user)

    this.putUserToLocalStorage(user)
    this.setState({ user: user })
  }

  updateUser = user => {
    if (user) {
      this.putUserToLocalStorage(user)
      this.setState({ user: user })
    }
  }

  addReport = () => {
    this.setState({ reportsToday: this.state.reportsToday + 1 })
  }

  render() {
    const { user, reportsToday } = this.state
    const { children } = this.props
    return (
      <Provider
        value={{
          user,
          login: this.login,
          signup: this.signup,
          logout: this.logout,
          updateUser: this.updateUser,
          reportsToday: reportsToday,
          addReport: this.addReport
        }}
      >
        {children}
      </Provider>
    )
  }
}

export { AuthProvider, Consumer as AuthConsumer }
