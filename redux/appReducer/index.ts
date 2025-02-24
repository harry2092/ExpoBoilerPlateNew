import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppReducer } from "./IAppReducer";

const initialState: IAppReducer = {
  name: "",
};

const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    SetName: (state, action: PayloadAction<any>) => {
      state = { ...state, name: action.payload };
      return state;
    },
  },
});

export const { SetName } = appSlice.actions;

export default appSlice.reducer;
