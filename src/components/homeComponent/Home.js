import React, { Component, Fragment } from 'react'
import ButtonAppBar from '../appBarComponent/AppBar'
import Social from '../socialComponent/Social'
import About from '../aboutComponent/About'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <About />
        <Social />
      </Fragment>
    )
  }
}

export default Home
