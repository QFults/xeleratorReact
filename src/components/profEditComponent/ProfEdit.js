import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import BTN from '../formComponent/Button'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    maxWidth: 345,
    margin: '0.5em'
  },
  media: {
    height: 140
  },
  avatar: {
    paddingTop: '1em',
    margin: 'auto'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}

class ProfEdit extends Component {
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
  return (
    <Card className={this.props.classes.card}>
      <CardActionArea>
        <Avatar
          alt='Quinton Fults'
          src={require('../../images/QF.png')}
          className={`${this.props.classes.avatar} ${this.props.classes.bigAvatar}`}
        />
        <CardContent>
          <Typography component='div'>
            <Grid container className={this.props.classes.root}>
              <Grid item xs={5} sm={5} md={6} lg={6}>
                <TextField
                  className={classNames(this.props.classes.margin, this.props.classes.textField)}
                  variant='outlined'
                  label='Name'
                  InputLabelProps={{ className: this.props.classes.input }}
                  InputProps={{ classes: { notchedOutline: this.props.classes.notchedOutline, input: this.props.classes.input } }}
                  margin='normal'
                />
              </Grid>
              <Grid item xs={2} sm={2} />
              <Grid item xs={5} sm={5} md={6} lg={6}>
                <TextField
                  className={classNames(this.props.classes.margin, this.props.classes.textField)}
                  variant='outlined'
                  label='Email'
                  InputLabelProps={{ className: this.props.classes.input }}
                  InputProps={{ classes: { notchedOutline: this.props.classes.notchedOutline, input: this.props.classes.input } }}
                  margin='normal'
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <TextField
                  id='outlined-multiline-flexible'
                  label='Message'
                  multiline
                  value={this.state.multiline}
                  onChange={this.handleChange('multiline')}
                  className={classNames(this.props.classes.margin, this.props.classes.textField)}
                  InputLabelProps={{ className: this.props.classes.input }}
                  InputProps={{ classes: { notchedOutline: this.props.classes.notchedOutline, input: this.props.classes.input } }}
                  margin='normal'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <BTN />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
}

ProfEdit.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfEdit)
