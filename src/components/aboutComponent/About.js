import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: 'white'
  },
  profiles: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: '100%',
    borderRadius: '0%',
    backgroundColor: 'white'
  }
})

function About (props) {
  const { classes } = props

  return (
    <Grid container>
      <Grid xs={12} item>
        <Paper className={classes.root} elevation={1}>
          <Typography component='p' style={{ color: '#212121' }}>
          We are a team of developers and former bootcamp teachers aiming to help you prepare for your journey into coding. Our goal is to offer a gentle introduction to the concepts and technologies that you will be exposed to during a coding bootcamp. We are your bootcamp primer. Go in prepared!
          </Typography>
        </Paper>
      </Grid>
      <Grid xs={6} item>
        <Paper className={classes.profiles} elevation={1}>
          <Avatar style={{ margin: 'auto' }} alt='Quinton Fults' src={require('../../images/AM.png')} />
          <Typography variant='h6' component='h6'>
          Alessandro MaClaine
          </Typography>
          <Typography component='p' style={{ color: '#212121' }}>
          Equal parts artist and engineer. Degrees in Math and Software Engineering. A passion for creating the future.
          </Typography>
        </Paper>
      </Grid>
      <Grid xs={6} item>
        <Paper className={classes.profiles} elevation={1}>
          <Avatar style={{ margin: 'auto' }} alt='Quinton Fults' src={require('../../images/QF.png')} />
          <Typography variant='h6' component='h6'>
          Quinton Fults
          </Typography>
          <Typography component='p' style={{ color: '#212121' }}>
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
