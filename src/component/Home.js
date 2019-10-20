import React, { Component } from 'react'
import {Jumbotron} from "reactstrap";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{textAlign:'center', backgroundColor:'#109cd9'}}>
                    <h1 className="display-5">People who Code & share!!!</h1>
                    <hr className="my-2" />
                    <small>FOR DEVELOPERS</small>
                </Jumbotron>
            </div>
        )
    }
}
