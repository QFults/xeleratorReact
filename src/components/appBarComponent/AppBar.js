import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Modal from '@material-ui/core/Modal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Form from '../formComponent/Form'

const styles = {
  list: {
    width: 250,
    color: '#ffd900',
    background: '#212121',
    height: '98vh'
  },
  fullList: {
    width: 'auto',
  },
  icons: {
    height: '2em',
    width: '2em'
  },
  bar: {
    background: '#ffd900',
    color: '#212121'
  },
  drawer: {
    background: '#212121'
  },
  links: {
    color: 'white !important'
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: '25%'
  },
  rest: {
    paddingLeft: '1.5em'
  },
  // paper: {
  //   position: 'absolute',
  //   width: theme.spacing.unit * 50,
  //   backgroundColor: theme.palette.background.paper,
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing.unit * 4,
  // },
}
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

class ButtonAppBar extends React.Component {
  state = {
    left: false,
    open: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }
  handleOpen = () => {
    this.toggleDrawer('left', false)
    setTimeout(() => this.setState({ open: true }), 500)
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root} style={{ paddingTop: '56px' }} >
        <Modal
        style={{top: '50%', width: '80%', margin: 'auto'}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <Paper elevation={1} style={{backgroundColor: '#212121'}}>
        <Form />
          </Paper>
          {/* <Paper className={classes.root} elevation={1}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Paper> */}
        </Modal>
        <AppBar position='fixed' className={classes.bar}>
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              <img src={require('../../images/xelLogo.png')} alt='logo' className={classes.icon} />
              <span className={classes.rest}>elerator</span>
            </Typography>
            <Button color='inherit'>Sign Out</Button>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          className={classes.list}
          >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            
          >
            <div className={classes.list}>
              <List>
                <ListItem dense button>
                  <Avatar alt="Quinton Fults" src={require('../../images/QF.png')} />
                  <ListItemText classes={{ primary: classes.links }} primary={`Quinton Fults`} secondary={<i style={{ fontSize: '0.75em', color: 'white' }}>quinton@xelerator.io</i>} />
                </ListItem>
              </List>
              <Divider />
              <List className={classes.list}>
                <ListItem onClick={() => window.location = 'http://youtube.com'}>
                  <ListItemIcon children={<img src={require('../../images/ytLogo.png')} alt='logo' className={classes.icons} />} />
                  <ListItemText classes={{ primary: classes.links }} primary={'YouTube'} />
                </ListItem>
                <ListItem onClick={() => window.location = 'http://instagram.com'}>
                  <ListItemIcon children={<img src={require('../../images/igLogo.png')} alt='logo' className={classes.icons} />} />
                  <ListItemText classes={{ primary: classes.links }} primary={'Instagram'} />
                </ListItem>
                <ListItem onClick={() => window.location = 'http://twitter.com'}>
                  <ListItemIcon children={<img src={require('../../images/twLogo.png')} alt='logo' className={classes.icons} />} />
                  <ListItemText classes={{ primary: classes.links }} primary={'Twitter'} />
                </ListItem>
                <ListItem>
                  <ListItemIcon children={<img src={require('../../images/mlLogo.png')} alt='logo' className={classes.icons} />} />
                  <ListItemText classes={{ primary: classes.links }} onClick={this.handleOpen} primary={'Contact Us'} />
                </ListItem>
              </List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
