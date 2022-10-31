import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPlayers: [],
  selectedPlayer: [],
};

const leaderBoardSlice = createSlice({
  name: "leaderBoard",
  initialState,
  reducers: {
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload;
    },
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
  },
});

export const { setAllPlayers, setSelectedPlayer } = leaderBoardSlice.actions;
export default leaderBoardSlice.reducer;
