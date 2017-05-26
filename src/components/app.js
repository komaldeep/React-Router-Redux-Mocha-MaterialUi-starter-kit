import React, {Component} from "react";
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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
                />
                <h3> React- redux project </h3>

                <input className="inputfield" type="text"/>
            </div>
        );
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: getMuiTheme(baseTheme)
        }
    }
}

