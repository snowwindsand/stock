import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li role="presentation"><Link to="/"
                </ul>
            </div>
        );
    }
}

export default Header;