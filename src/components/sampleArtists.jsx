import React from 'react';
import SampleArtist from './sampleArtist';

class sampleArtists extends React.Component {
  render() {
    return (
      <div className='sampleArtistsDiv'>
				<SampleArtist/>
				<SampleArtist/>
				<SampleArtist/>
				<SampleArtist/>
				<SampleArtist/>
      </div>
    )
  }
}

export default sampleArtists;