import { combineReducers } from "@reduxjs/toolkit";
import catalogReduser from "./slices/slice-catalog";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['token'],
//   };

//   const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  // auth: persistedReducer,
  // contacts: contactsReducer,
  // filter: filterReducer,
  catalog: catalogReduser,
});

export default rootReducer;
