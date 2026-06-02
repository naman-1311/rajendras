import { Action, configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";

const appSlice = createSlice({ name: "app", initialState: {}, reducers: {} });

export const store = configureStore({
  reducer: { app: appSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
