import React, { Fragment } from 'react'
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
import { Route, Redirect } from 'react-router'
import Dashboard from '../dashboardComponent/Dashboard'

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
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
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
            <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.runAuth}/>
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
