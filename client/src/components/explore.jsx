import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const ExplorePage = () => {
    return (
        <div>
            <Navbar />
            <div className='page-setup'>
                <div className='explore-header'>EXPLORE</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360450262!2d-74.30932624893724!3d40.69753996755321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1696047172977!5m2!1sen!2sus" className='google-maps'></iframe>
            </div>
        </div>
    )
}

export default ExplorePage;