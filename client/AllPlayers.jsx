import React from 'react'
import SinglePlayer from './SinglePlayer';
import { Link } from 'react-router-dom';


const AllPlayers = ({players}) => {
  

  console.log("from all players", players)
return  (
  <div className="playersContainer">
<div id='players' >
  <h1 className="headline">Leaderboard:</h1>

 {players.map((player) => {
  return <Link to={`/leaderboard/${player.id}`} key={player.id}> 
    
     <p className="player">{player.username[0].toUpperCase() + player.username.slice(1,player.username.length)}</p>
   
  </Link>
 })}


  

</div>
</div>)

}


export default AllPlayers;