import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
w
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 1,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    backgroundColor: 'white'
  },
  profiles: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 1,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    backgroundColor: 'white'
  }
})

function About (props) {
  const { classes } = props

  return (
    <Grid container>
      <Grid xs={12} item>
        <Paper className={classes.root} elevation={1}>
          <Typography variant='h6' component='h6' style={{ fontSize: '1rem' }}>
            About Us
          </Typography>
          <Typography component='p' style={{ color: '#212121', fontSize: '0.7rem' }}>
          We are a team of developers and former bootcamp teachers aiming to help you prepare for your journey into coding. Our goal is to offer a gentle introduction to the concepts and technologies that you will be exposed to during a coding bootcamp. We are your bootcamp primer. Go in prepared!
          </Typography>
        </Paper>
      </Grid>
      <Grid xs={6} item>
        <Paper className={classes.profiles} elevation={1} style={{ height: '85%' }}>
          <Avatar style={{ margin: 'auto' }} alt='Quinton Fults' src={require('../../images/AM.png')} />
          <Typography variant='h6' component='h6' style={{ fontSize: '1rem' }}>
          Alessandro MaClaine
          </Typography>
          <Typography component='p' style={{ color: '#212121', fontSize: '0.7rem' }}>
          Equal parts artist and engineer. Degrees in Math and Software Engineering. A passion for creating the future.
          </Typography>
        </Paper>
      </Grid>
      <Grid xs={6} item>
        <Paper className={classes.profiles} elevation={1} style={{ height: '85%' }}>
          <Avatar style={{ margin: 'auto' }} alt='Quinton Fults' src={require('../../images/QF.png')} />
          <Typography variant='h6' component='h6' style={{ fontSize: '1rem' }}>
          Quinton Fults
          </Typography>
          <Typography component='p' style={{ color: '#212121', fontSize: '0.7rem' }}>
          Coding Bootcamp Graduate turned Lead Bootcamp Instructor at a major university. Also an expert banjo player.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
