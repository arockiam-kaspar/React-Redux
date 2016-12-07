import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

//Basic Reducer 1
/*const reducer = function(state, action){
  if(action.type=="INC"){
    return state+action.payload
  }
  else{
    return state;
  }
}
const store = createStore(reducer, 0);
*/
//Basic Reducer 2
const userReducer = (state={}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state =  {...state, name:action.payload}
      break;
    case "CHANGE_AGE":
      state =  {...state, age:action.payload}
      break;
  }
  return state;
}
const tweetReducer = (state=[], action) => {
  return state;
}
const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
});

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducers, middleware);

/*store.subscribe(()=> {
  console.log("store changed", store.getState())
})*/

store.dispatch({type: "CHANGE_NAME", payload: "WILL"})
store.dispatch({type: "CHANGE_AGE", payload: 35})
