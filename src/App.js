import React, { Component } from 'react'
import './App.css'
import ButtonAppBar from './components/appBarComponent/AppBar'
import Home from './components/homeComponent/Home'
import Dashboard from './components/dashboardComponent/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAe0xQ2XFcEDFVmGeGBRuEUnIKdoODZBX0",
  authDomain: "xelerator-coding.firebaseapp.com",
  databaseURL: "https://xelerator-coding.firebaseio.com",
  projectId: "xelerator-coding",
  storageBucket: "xelerator-coding.appspot.com",
  messagingSenderId: "91210217411"
}

firebase.initializeApp(config)

class App extends Component {
  state = {
    uid: localStorage.getItem('uid'),
    isSignedIn: false,
    user: {}
  }

  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        // alert(JSON.stringify(user))
        localStorage.setItem('uid', user.uid)
        console.log(user)
        this.setState({ isSignedIn: !!user, uid: user.uid, user: {
          name : user.displayName,
          email: user.email,
          photo: (user.photoURL ? user.photoURL : require('./images/default.jpg'))
        } })
        console.log(this.state.user)
      }
    )
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <ButtonAppBar uiConfig={this.uiConfig} runAuth={firebase.auth()} user={this.state.user} />
            <Route exact path='/' render={ () => <Home />} />
            <Route path='/dashboard' render={ () => <Dashboard user={this.state.user}/>} />
            {/* <Route path='/dashboard' render={ () => this.state.isSignedIn ? <Dashboard /> : <Home />} /> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App
