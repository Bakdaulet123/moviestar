import React, { Component } from 'react'
import '../../styles/header.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

export class Header extends Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render(){

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div>
                <span>
                    <strong>
                        { user ? `Welcome ${user.username}`: '' }
                    </strong>
                </span>
                <button className="sign-in" onClick={this.props.logout}><a className="sign-in-btn">Logout</a></button>
            </div>
        );

        const guestLinks = (
            <div>
                <button className="sign-in"><Link to="/register" className="sign-in-btn">Sign Up</Link></button>
                <button className="sign-in"><Link to="/login" className="sign-in-btn">Sign In</Link></button>
            </div>
        );

        return(
            <header className="header">
                <h1 className="logo">MovieStar</h1>
                <ul className="links">
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/digest">Digests</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/chats">Cinema</Link></li>
                </ul>
                { isAuthenticated ? authLinks : guestLinks }
            </header>
        
        )
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header)