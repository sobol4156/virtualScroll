import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postApi } from './api';
import selectedPostReducer from './selectedPostSlice'

export const rootReducer= combineReducers({
  [postApi.reducerPath]:postApi.reducer,
  selectedPost: selectedPostReducer,

})


export const setupStore=()=>{
  return configureStore({
      reducer:rootReducer,
      middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
  })
}

export default rootReducer;