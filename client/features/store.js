import { configureStore } from "@reduxjs/toolkit";
import leaderBoardReducer from "./leaderBoardSlice";

export const store = configureStore({
  reducer: {
    leaderBoard: leaderBoardReducer,
  },
});
