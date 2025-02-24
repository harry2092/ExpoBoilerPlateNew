import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiReducer";
import appSlice from "./appReducer";

const reducers = combineReducers({
  appSlice: appSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["appSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware) as any,
});
store.subscribe(() => {
  // console.log("Store", store.getState())
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
