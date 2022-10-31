import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import Test from "./Test.jsx";
import { Route, Routes } from "react-router-dom";
// import {BrowserRouter as Router} from 'react-router-dom'
import SinglePlayer from "./SinglePlayer";
import { useSelector, useDispatch } from "react-redux";
import { setAllPlayers } from "./features/leaderBoardSlice";

const App = () => {
  const dispatch = useDispatch();
  // const [players, setPlayers] = useState([])
  // selector to bring state from redux
  const players = useSelector((state) => state.leaderBoard.allPlayers);
  console.log(players);

  const getPlayers = async () => {
    const response = await axios.get("http://localhost:8080/api/players");
    dispatch(setAllPlayers(response.data));
  };

  useEffect(() => {
    console.log("First useEffect Kicked off");
    getPlayers();
  }, []);

  return (
    <div className="row container">
      <h1 className="header">ROSHAMBO!!</h1>
      {/* The game starts here! */}

      <div className="buttons">
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/leaderboard">
            <button>Leaderboard</button>
          </Link>
          <Link to="/play">
            <button>Play</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          exact
          path="/leaderboard"
          element={<AllPlayers players={players} />}
        />
        <Route exact path="/leaderboard/:id" element={<SinglePlayer />} />
        <Route path="/" element={<p></p>} />
        <Route path="/*" element={<p></p>} />
      </Routes>
    </div>
  );
};

export default App;
