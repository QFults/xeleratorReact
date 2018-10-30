import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import BTN from './Button'
import Grid from '@material-ui/core/Grid'

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

  render() {
    const { classes } = this.props

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            className={classNames(classes.margin, classes.textField)}
            variant='outlined'
            label='Name'
            InputLabelProps={{ className: classes.input }}
            InputProps={{ classes: { notchedOutline: classes.notchedOutline, input: classes.input } }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            className={classNames(classes.margin, classes.textField)}
            variant='outlined'
            label='Email'
            InputLabelProps={{ className: classes.input }}
            InputProps={{ classes: { notchedOutline: classes.notchedOutline, input: classes.input } }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
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
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <BTN />
        </Grid>
      </Grid>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form)
