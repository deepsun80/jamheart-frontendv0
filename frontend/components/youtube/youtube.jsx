import React from 'react';
import { Link } from 'react-router';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
      </div>
    )
  }
}

export default Youtube;
