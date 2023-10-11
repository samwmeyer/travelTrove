import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
                <span className='funFont'>Travel Trove</span>
                <span className='navBarLinks'>
                    <Link to={'/'} className='navBarButton'>Home</Link>
                    <Link to={'/explore'} className='navBarButton'>Explore</Link>
                    <Link to={'/mytrips'} className='navBarButton2'>My Trips</Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar;