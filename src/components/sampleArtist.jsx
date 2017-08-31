import React from 'react';

class sampleArtist extends React.Component {
  render() {
    return (
      <div className='sampleArtistDiv'>
        <img src='http://cdn-assets.insomniac.com/images/news/Top100Covers_Gorillaz-Plastic-Beach.jpg' alt=''/>
				<div className='sampleArtistInfo'>
					<p className='sampleArtistName'>Gorillaz</p>
					<p className='sampleArtistHandle'>@Gorillaz</p>
				</div>
      </div>
    )
  }
}

export default sampleArtist;