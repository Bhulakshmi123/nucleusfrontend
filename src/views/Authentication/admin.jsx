import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
export class admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    
    render() {
        if(this.state.loggedIn === false) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                This is a Admin Component jslkdjaslkdldksdjsdkjsalkd
                <br></br>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
export default admin
