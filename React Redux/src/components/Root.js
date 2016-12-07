import React,{Component} from "react";
import {Header} from "../components/Header";
import { connect } from "react-redux";
import {fetchUser} from "../actions/userActions";
import '../style/main.less';

@connect ((store) => {
  console.log(store);
  return {
    user:store.user.user,
    userFetched:store.user.fetched,
    tweets:store.tweets.tweets
  };
})
export default class Root extends React.Component{
  componentWillMount(){
    this.props.dispatch(fetchUser());
    //console.log("store", this.store)
  }
  componentDidMount() {

  }
  render(){
    console.log(this.props);
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <Header homeLink="Home"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-10">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
