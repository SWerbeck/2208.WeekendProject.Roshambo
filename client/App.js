import React, { useEffect, useState} from 'react';
// import axios from 'axios'
import { Link } from 'react-router-dom';
import AllPlayers from './AllPlayers'
import Test from './Test.jsx'
import { Route, Routes } from "react-router-dom";
// import {BrowserRouter as Router} from 'react-router-dom'
import SinglePlayer from './SinglePlayer';

const App = () => {
  const [players, setPlayers] = useState([])

  //  const getPlayers = async () => {
  //   const response = await axios.get('http://localhost:8080/api/players'),
  //   setPlayers(response.data.data)
  //  }
      
const getPlayers = async () => {
  const response = await fetch (
    'http://localhost:8080/api/players'
  )
    const json = await response.json()
  
    setPlayers(json)
}

useEffect( () => {
  console.log("First useEffect Kicked off");
  getPlayers();
}, [])
  
  return (
    <div className='row container'>
      <h1 className="header">ROSHAMBO!!</h1>
      {/* The game starts here! */}

      
      <div className="buttons">

      
        <div>
        
          <Link to="/"><button>Home</button></Link>
          <Link to="/leaderboard"><button>Leaderboard</button></Link>
          <Link to="/play"><button>Play</button></Link>
          <Link to="/singleplayer"><button>Single player</button></Link>
          <Link to="/test"><button>TEST</button></Link>
        </div>
      </div>
      <Routes>
        {/* <Route exact path="/leaderboard" element={<AllPlayers />} /> */}
        
        <Route exact path="/singleplayer" element={<SinglePlayer />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="/" element={<p></p>}/>
        <Route path="/*" element={<p></p>}/>
      </Routes>
    </div>
  );
};

export default App;