import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import BTN from './Button'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white'
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  },
  input: {
    color: 'white !important'
  },
  notchedOutline: {
    borderColor: 'white'
  }
})

class Form extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    multiline: ''
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <TextField
          className={classNames(classes.margin, classes.textField)}
          variant='outlined'
          label='Name'
          InputLabelProps={{ className: classes.input }}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline, input: classes.input } }}
        />
        <TextField
          className={classNames(classes.margin, classes.textField)}
          variant='outlined'
          label='Email'
          InputLabelProps={{ className: classes.input }}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline, input: classes.input } }}
        />
        <TextField
          id='outlined-multiline-flexible'
          label='Message'
          multiline
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classNames(classes.margin, classes.textField)}
          InputLabelProps={{ className: classes.input }}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline, input: classes.input } }}
          margin='normal'
          variant='outlined'
        />
        <BTN />
      </div>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form)
