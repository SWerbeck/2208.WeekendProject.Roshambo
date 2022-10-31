import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import AllPlayers from './AllPlayers';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlayer } from './features/leaderBoardSlice';




const SinglePlayer = () => {
  const dispatch = useDispatch()
  const player = useSelector((state) => state.leaderBoard.selectedPlayer)
  // const [player, setPlayer] = useState([])
  const [doneLoading, setDoneLoading] = useState(false);

  const {id} = useParams()

  const getPlayer = async () => {
    const response = await axios.get(`http://localhost:8080/api/players/${id}`)
    dispatch(setSelectedPlayer(response.data))
    setDoneLoading(true);
    console.log(response.data)
  }
      

  
useEffect( () => {
  console.log("First useEffect Kicked off for getPlayer");
  getPlayer();
}, [])
console.log(player)

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