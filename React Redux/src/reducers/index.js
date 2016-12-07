import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import tweets from './tweetsReducer';
import user from './userReducer';

const rootReducer= combineReducers({
  tweets,
  user,
  routing:routerReducer
})

export default rootReducer;
