import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='home-header'>ADVENTURE AWAITS!</div>
            <div className='home-body'>Welcome to Travel Trove. Founded by a huge travel enthusiast who loves planning an adventure (even if it's totally unrealistic), Travel Trove is meant to inspire and encourage those with a longing sense of adventure, who just can't shake the wanderlust.</div>
            <div className='home-buttons'>
                <button className='home-btn' onClick={ () => navigate('/mytrips') }>View Trips</button>
                <button className='home-btn' onClick={ () => navigate('/addtrip') }>Add a New Trip</button>
            </div>
        </div>
    )
}

export default HomePage;