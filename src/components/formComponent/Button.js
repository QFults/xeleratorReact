import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#ffd900',
    color: '#212121'
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

const BTN = props =>
  <Button variant='contained' className={props.classes.button}>
        Send
    <Icon className={props.classes.rightIcon}>send</Icon>
  </Button>

BTN.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BTN)
