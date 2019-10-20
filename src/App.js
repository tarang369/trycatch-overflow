import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header"
import Home from "./component/Home"
import Login from "./component/Login"
import SignUp from "./component/SignUp"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header title1="Login" title2="Sign Up" />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </Fragment>
    )
  }
}
export default App