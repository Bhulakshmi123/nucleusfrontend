import React, { Component } from 'react';
import '../../assets/css/Widgets.css';
import searchIcon from '../../assets/icons/search.svg';

class SearchInput extends Component{

    constructor(){
        super();
        this.state = {
            openSearch: false,
            searchKeyword: '', 
        }
    }
    
    toggleSearch = (e) => {
        this.setState({
            openSearch: !this.state.openSearch
        });
    }

    render(){

        let active = (this.state.openSearch) ? 'active' : '';

        return (
            <div className="search-control">
                <div className={`search-box ${active}`}>
                    <input className="search-input" name="searchKeyword" value={this.props.searchKeyword} onChange={this.props.handleChange} type="text" placeholder="search" />
                </div> 
                <button className="search-btn" onClick={this.toggleSearch}>
                    <img alt="" src={searchIcon} />
                </button>
            </div>
        );
    }
}

export default SearchInput;