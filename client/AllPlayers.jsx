import React from 'react'
import SinglePlayer from './SinglePlayer';

const AllPlayers = (props) => {
  // has access to props.albums
return  (
<div id='players' >

  
  {props.players.map(player => <SinglePlayer/>)}


</div>)

}


export default AllPlayers;