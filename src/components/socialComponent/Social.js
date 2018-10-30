import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import YouTubePlayer from '../youtubeComponent/youtube'
import Form from '../formComponent/Form'
const styles = theme => ({
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
  }
})

const Social = props =>
  <div className={props.classes.root} >
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/ytLogo.png')} alt='youtube' />}>
        <Typography className={props.classes.heading}>YouTube <span className={props.classes.handle}><i>@xeleratorTube</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <YouTubePlayer />
          {/* <iframe title='sample' className={props.classes.video} width='560' height='315' src='https://www.youtube.com/embed/VuN8qwZoego?controls=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen />. */}
          <a href='https://www.youtube.com/channel/UCoebwHSTvwalADTJhps0emA'>Here</a>
          <span> you will find all of our available videos for free tier subscribers.</span>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/igLogo.png')} alt='instagram' />}>
        <Typography className={props.classes.heading}>Instagram <span className={props.classes.handle}><i>@xeleratorInsta</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel className={props.classes.panel}>
      <ExpansionPanelSummary expandIcon={<img className={props.classes.icons} src={require('../../images/twLogo.png')} alt='twitter' />}>
        <Typography className={props.classes.heading}>Twitter <span className={props.classes.handle}><i>@xeleratorTweet</i></span></Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
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
