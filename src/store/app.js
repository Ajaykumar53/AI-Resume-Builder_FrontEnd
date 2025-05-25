
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage
// import storageSession from 'redux-persist/lib/storage/session' // if you prefer sessionStorage

// Reducers
import passWordToggleSlice from "./passwordToggle";
import FontSlice from "./CustomFonts";
import userData from './userData';
import ResumeSlice from "./ResumeData";
import theme from "./theme";

// Combine all reducers
const rootReducer = combineReducers({
  passwordToggle: passWordToggleSlice,
  FontSlice: FontSlice,
  userData: userData,
  resume: ResumeSlice,
  theme: theme,
});

// Redux Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['resume', 'SelectedTemplate', 'FontSlice', 'theme'] // ← Only persist these slices
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(appStore);

export default appStore;
