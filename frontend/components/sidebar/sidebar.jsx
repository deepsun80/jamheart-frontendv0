import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar'>
        <ul className='sidebarUL'>
          <li className='sidebarParentLI'>
            <Link to='/dashboard' className='sidebarLink'>
              Dashboard
            </Link>
          </li>
          <li className='sidebarParentLI'>
            Add New Source
            <ul className='newSourceUL'>
              <li className='newSourceLI'>
                <Link to='/facebook' className='newSourceLink'>
                  Facebook Feed
                </Link>
              </li>
              <li className='newSourceLI'>
                <Link to='/youtube' className='newSourceLink'>
                  YouTube Feed
                </Link>
              </li>
              <li className='newSourceLI'>
                <Link to='/soundcloud' className='newSourceLink'>
                  SoundCloud Feed
                </Link>
              </li>
              <li className='newSourceLI'>
                <Link to='/spotify' className='newSourceLink'>
                  Spotify Feed
                </Link>
              </li>
              <li className='newSourceLI'>
                <Link to='/hypem' className='newSourceLink'>
                  HypeM Feed
                </Link>
              </li>
              <li className='newSourceLI'>
                <Link to='/manual' className='newSourceLink'>
                  Manually Input Songs/Playlist
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
