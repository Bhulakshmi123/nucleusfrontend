import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
    
        return (
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="company-logo">
                        
                            <div className="profile-pic">
                                <img alt="" className="img-fluid" src="https://yt3.ggpht.com/a-/AAuE7mA7aP8Oh8z3jH9cBOurzQ0uDJpOY3bL0Qe7iQ=s900-mo-c-c0xffffffff-rj-k-no" />
                            </div>
                            <Link to={`/home`} className="company-name">Equiphunt</Link>
                        
                        </div>

                    </div>
                </div>
            </div>
        );
    
}

export default Header;