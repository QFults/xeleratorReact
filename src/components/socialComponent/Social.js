import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Paper from '@material-ui/core/Paper'
import YouTubePlayer from '../youtubeComponent/youtube'
import Form from '../formComponent/Form'
const styles = theme => ({
  rootPaper: {
    ...theme.mixins.gutters(),
    margin: 0,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1,
    backgroundColor: 'white'
  },
  root: {
    width: '100%',
    background: '#212121'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'white'
  },
  icons: {
    height: '1em',
    width: '1em'
  },
  video: {
    display: 'block',
    margin: 'auto',
    height: '90%',
    width: '90%'
  },
  panel: {
    background: '#212121'
  },
  handle: {
    fontSize: theme.typography.pxToRem(10)
  },
  stock: {
    width: '12rem',
    height: '10rem',
    borderRadius: '4%'
  }
})

const Social = props =>
  <div className={props.classes.root} >
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/ytLogo.png')} alt='youtube' />}>
        <Typography className={props.classes.heading}>YouTube <span className={props.classes.handle}><i>@xeleratorTube</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper className={props.classes.rootPaper} elevation={1}>
          <Typography>
            <YouTubePlayer />
            <p style={{ paddingTop: '0.2rem' }}>YouTube is where you can find any and all Xelerator videos, both for Free Tier and Premium Tier subscribers. Check out the video above for an explanation all about Xelerator and what we do!</p>
          </Typography>
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/igLogo.png')} alt='instagram' />}>
        <Typography className={props.classes.heading}>Instagram <span className={props.classes.handle}><i>@xeleratorInsta</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper className={props.classes.rootPaper} elevation={1}>
          <Typography>
            <img className={props.classes.stock} src={require('../../images/instaSTOCK.jpg')} alt='instagram stock' />
            <p>Instagram is a perfect platform for short and concise 1-minute instructional videos on some of the smaller concepts essential to Computer Programming. On the Xelerator instagram, that is exactly what you will find.</p>
          </Typography>
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/twLogo.png')} alt='twitter' />}>
        <Typography className={props.classes.heading}>Twitter <span className={props.classes.handle}><i>@xeleratorTweet</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper className={props.classes.rootPaper} elevation={1}>
          <Typography>
            <img className={props.classes.stock} src={require('../../images/instaSTOCK.jpg')} alt='instagram stock' />
            <p>Twitter is a perfect platform for short and concise 1-minute instructional videos on some of the smaller concepts essential to Computer Programming. On the Xelerator instagram, that is exactly what you will find.</p>
          </Typography>
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/mlLogo.png')} alt='mail' />}>
        <Typography className={props.classes.heading}>Contact Us</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Form />
        {/* <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography> */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>

Social.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Social)
