import React from 'react';
import { Link } from 'react-router';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //sets dashboard as active component in state, highlighting button on navbar
    this.props.setDashboardActive();
  }

  render() {
    return (
      <div className='yt'>
        <div className='ytTopHalf'>
          <h1 className='ytHeader'>
            YouTube
          </h1>
          <p className='ytSmallHeader'>
            Import YouTube Music <br />
            Channel Subscriptions
          </p>
          <button className='ytConnectButton'>
            Connect to YouTube
          </button>
          <p className='ytSkipConnect'>
            Skip
          </p>
        </div>
        <div className='ytBotHalf'>
          <div className='ytAddChannel'>
            <div className='ytSmallHeader'>
              Manually Add YouTube <br />
              Channel URL
            </div>
            <div className='ytSubText'>
              Or enter keywords to search for a channel
            </div>
            <input type='text' className='ytInput' placeholder='http://www.youtube.com/user/PandoraMusic' />
          </div>
          <div className='ytAddPlaylist'>
            <div className='ytSmallHeader'>
              Manually Add YouTube <br />
              Playlist URL
            </div>
            <div className='ytSubText'>
              Paste the URL from any song within a YouTube Playlist
            </div>
            <input type='text' className='ytInput' placeholder='http://www.youtube.com/watch?v=oWYp1xRPH5g&list...' />
          </div>
        </div>
      </div>
    )
  }
}



export default Youtube;
