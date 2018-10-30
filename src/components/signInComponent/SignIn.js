import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import SvgIcon from '@material-ui/core/SvgIcon'

const config = {
  apiKey: "AIzaSyAe0xQ2XFcEDFVmGeGBRuEUnIKdoODZBX0",
  authDomain: "xelerator-coding.firebaseapp.com",
  databaseURL: "https://xelerator-coding.firebaseio.com",
  projectId: "xelerator-coding",
  storageBucket: "xelerator-coding.appspot.com",
  messagingSenderId: "91210217411"
}

firebase.initializeApp(config)

const HomeIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

class SignIn extends React.Component {
  state = {
    open: false,
    isSignedIn: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    )
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { fullScreen } = this.props

    return (
      <div>
        <Button color='inherit' onClick={this.handleClickOpen}>Sign Up</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Sign In and let's start learning.</DialogTitle>
          <DialogContent>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <SvgIcon style={{ margin: '1em' }}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

SignIn.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
}

export default withMobileDialog()(SignIn)
