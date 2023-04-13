import React from 'react';
import Styles from './Navbar.css';

function Navbar() {

    const user = [
        {
            "Name": "Alan",
            "Location": "New York",
            "Image": "https://i.redd.it/v0caqchbtn741.jpg"
        }
    ]

    return (
        // <nav>
        //     <ul>
        //     <li><a href="Home">Home</a></li>
        //     <li><a href="About">About</a></li>
        //     <li><a href="Upcoming">Upcoming Events</a></li>
        // </ul>
        // </nav>

        <div className='navbar-container'>

            <div className='user-image'>
                <img className='profile-picture' src={user.map(user => user.Image)}></img>
            </div>

            <div className='button-container'>
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Upcoming">Upcoming Events</a>
            </div>

            <div className='user-panel'>
                <a href="Home">My Profile</a>
                <a href="Upcoming">Logout</a>
            </div>

        </div>
    );
}

export default Navbar;
