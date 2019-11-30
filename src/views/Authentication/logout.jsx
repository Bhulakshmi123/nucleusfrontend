import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                This is Logout Component
                <Link to="/">Login Again</Link>
            </div>
        )
    }
}
export default logout
