import React from 'react';
import { Link } from 'react-router';
import SampleArtists from '../sampleArtists'

class Facebook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //sets dashboard as active component in state, highlighting button on navbar
    this.props.setDashboardActive();
  }

  render() {
    return (
      <div className='rootPage'>
        <div className='topHalf'>
          <p id='facebookTitle' className='feedTitle'>Facebook</p>
          <SampleArtists/>
          <img className='headphones' src='' />
          <p className='neverMiss'>Never miss an update from your favorite musicians on Facebook!</p>
          <div className='connect'>
            <p className='connectTitle'>Link your Facebook Music Pages</p>
            <button className='connectButton'>
              <img className='connectButtonLogo' src='' />
              <p className='connectButtonTitle'>Connect with Facebook</p>
            </button>
          </div>
        </div>
        <div className='bottomHalf'>
          <p>Manually Add Facebook Page URL or enter keywords to search for a page</p>
          <button className='searchPages'><img src=''/></button>
          <input placeholder='https://www.facebook.com/pagename...' />
        </div>
      </div>
    )
  }
}



export default Facebook;
