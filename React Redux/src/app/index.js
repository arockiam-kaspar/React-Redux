import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import store from '../store';
import Root from "../components/Root";
import Home from "../components/Home";
import User from "../components/User";
const app = document.getElementById("app");


/* Not working
class App extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
          <Route path="/" component={Root} >
              <IndexRoute component={Home} ></IndexRoute>
              <Route path="user" component={User} />
              <Route path="home" component={Home} />
          </Route>
      </Router>
    )
  }
}*/
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Root} >
            <IndexRoute component={Home} ></IndexRoute>
            <Route path="user" component={User} />
            <Route path="home" component={Home} />
        </Route>
    </Router>
 </Provider>
);
render(router, app);
