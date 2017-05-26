import React, {Component} from "react";
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:"komaldeep1993@gmail.com",
        }
    }

    render(){
        return(
            <div className="">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <h3> React- redux project </h3>

                <input className="inputfield" type="text"/>
            </div>
        );
    }
}

