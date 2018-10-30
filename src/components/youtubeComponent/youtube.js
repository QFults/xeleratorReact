import React from 'react'
import YouTube from 'react-youtube'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  video: {
    display: 'block',
    margin: 'auto',
    height: '80%',
    width: '80%'
  }
})

const YouTubePlayer = props =>
  <YouTube
    className={props.classes.video}
    videoId='2g811Eo7K8U'
    onReady={event => event.target.pauseVideo()}
  />

export default withStyles(styles)(YouTubePlayer)
