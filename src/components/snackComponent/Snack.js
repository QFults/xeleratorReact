import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
})

class Snack extends React.Component {
  state = {
    open: true,
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={this.props.message()}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={() => {
              this.props.executable()
              this.handleClose()
            }}>
              {this.props.label}
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    )
  }
}

Snack.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Snack)
