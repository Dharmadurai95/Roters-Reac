import React, { Component } from 'react';
import './navlink.css';

class Navlink extends Component {
    render() {
        return (
            <div>
                <div className='NavLink'>
                    <nav>
                        <ul>
                            <li><p onClick={this.props.renderContent}>{this.props.title}</p></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
};
export default Navlink;