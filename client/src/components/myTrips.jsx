import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar';

const MyTripsPage = () => {
    const [ trips, setTrips ] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect (() => {
        axios
            .get( 'http://localhost:3000/api/trips' )
            .then( res => setTrips(res.data) )
            .catch( err => console.log(err) )
    }, [])

    const deleteHandler = id => {
        axios
            .delete( `http://localhost:3000/api/trips/${id}` )
            .then( res => {
                console.log(res);
                setTrips(trips.filter(trip => trip._id !== id));
            })
            .catch( err => console.log(err) )
    }
    
    return (
        <div>
            <Navbar />
            <button className='triplistbtn' onClick={ () => navigate('/addtrip') }>Add a Trip!</button>
            <div className='triplist'>
                { trips.map((trip, index) => {
                    return (
                        <div key={trip._id} className='triplistdiv'>
                            <h3 style={{textDecoration: "underline", marginBottom: "10px"}}>{trip.name}</h3>
                            <div>Length: {trip.length}</div>
                            <div>Destination(s): {trip.destination}</div>
                            <div className='list-btns'>
                                {<button className='update-btn' onClick={ () => navigate(`/updatetrip/${trip._id}`) }>Update</button>}
                                {<button className='delete-btn' onClick={ () => deleteHandler(trip._id) }>Delete</button>}
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default MyTripsPage;