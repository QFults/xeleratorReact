import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Scatter, Pie } from 'react-chartjs-2'
import Divider from '@material-ui/core/Divider'
import Snack from '../snackComponent/Snack'
import ProfEdit from '../profEditComponent/ProfEdit'

const scatterData = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Test Scores',
      fill: false,
      backgroundColor: '#ff110a',
      pointBorderColor: '#212121',
      pointBackgroundColor: '#ff110a',
      pointBorderWidth: 0.5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff110a',
      pointHoverBorderColor: '#ff110a',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 }
      ]
    }
  ]
}

const pieData = {
  labels: [
    'HTML',
    'CSS',
    'JS'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

class Dashboard extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render () {
    return (
      <Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <ProfEdit />
        </Modal>
        <Paper className={this.props.classes.root} elevation={1} style={{ margin: '1rem' }}>
          <Scatter data={scatterData} />
        </Paper>
        <Divider />
        <Paper className={this.props.classes.root} elevation={1} style={{ margin: '1rem' }}>
          <Pie data={pieData} />
        </Paper>
        <Snack executable={this.handleOpen} label='SETUP' message={() => <span id='message-id'>Welcome To Xelerator! Click here to begin setting up your profile.</span>} />
      </Fragment>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
