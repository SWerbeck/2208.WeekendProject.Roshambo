import React from 'react'
import SinglePlayer from './SinglePlayer';
import { Link } from 'react-router-dom';


const AllPlayers = ({players}) => {
  

  console.log("from all players", players)
return  (
<div id='players' >
  <h1 className="headline">Leaderboard:</h1>

 {players.map((player) => {
  return <Link to={`/leaderboard/${player.id}`} key={player.id}> 
    <button > 
     <p>{player.username}</p>
    </button> 
  </Link>
 })}


  


</div>)

}


export default AllPlayers;