import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonAppBar from './components/appBarComponent/AppBar'
import Social from './components/socialComponent/Social'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <ButtonAppBar />
        <Social />

      </div>
    )
  }
}

export default App
