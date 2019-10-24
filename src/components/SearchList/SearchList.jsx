import React, { Component } from 'react'
import './SearchList.css'
class SearchList extends Component {
    render() {
        return (
            <div className="searchGrand">
                <input className="searchFath" placeholder="Search"></input>
                <div className="searchChil"><i className="fas fa-search"></i></div>
            </div>
        )
    }
}
export default SearchList
