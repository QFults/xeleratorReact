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
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar';

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
  }
}
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

class ButtonAppBar extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem dense button>
            <Avatar alt="Quinton Fults" src={require('../../images/QF.png')} />
            <ListItemText classes={{ primary: classes.links }} primary={`Quinton Fults`} secondary={<i style={{fontSize: '0.75em', color: 'white'}}>quinton@xelerator.io</i>} />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon children={<img src={require('../../images/ytLogo.png')} alt='logo' className={classes.icons} />} />
            <ListItemText classes={{primary: classes.links}} primary={'YouTube'} />
          </ListItem>
          <ListItem>
            <ListItemIcon children={<img src={require('../../images/igLogo.png')} alt='logo' className={classes.icons} />} />
            <ListItemText classes={{primary: classes.links}} primary={'Instagram'} />
          </ListItem>
          <ListItem>
            <ListItemIcon children={<img src={require('../../images/twLogo.png')} alt='logo' className={classes.icons} />} />
            <ListItemText classes={{primary: classes.links}} primary={'Twitter'} />
          </ListItem>
          <ListItem>
            <ListItemIcon children={<img src={require('../../images/mlLogo.png')} alt='logo' className={classes.icons} />} />
            <ListItemText classes={{primary: classes.links}} primary={'Contact Us'} />
          </ListItem>
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    )

    return (
      <div className={classes.root} style={{paddingTop: '56px'}} >
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
            {sideList}
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
