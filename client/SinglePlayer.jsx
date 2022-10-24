import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import AllPlayers from './AllPlayers';
import { useParams } from 'react-router-dom';


const SinglePlayer = () => {
  const [player, setPlayer] = useState([])
  const [doneLoading, setDoneLoading] = useState(false);

  const {id} = useParams()

  const getPlayer = async () => {
    const response = await axios.get(`http://localhost:8080/api/players/${id}`)
    setPlayer(response.data)
    setDoneLoading(true);
    console.log("this is your player", player)
  }
      

  
useEffect( () => {
  console.log("First useEffect Kicked off for getPlayer");
  getPlayer();
}, [])

if (!doneLoading) return  <p>loading</p>

else
  return (
  <div className="playersContainer">
    <div>
      <p className="headline">{player.username[0].toUpperCase() + player.username.slice(1,player.username.length)}:</p>
      {player.games.map(game => (
        <li key={game.id} className="results">
            Game: {game.id} Result: {game.result}
        </li> 
      ))}
   
     </div>
    </div>



  )
  }

export default SinglePlayer;