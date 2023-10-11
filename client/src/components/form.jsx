import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const AddTrip = () => {
    
    const [ name, setName ] = useState("");
    const [ length, setLength ] = useState("");
    const [ destination, setDestination ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/trips", { name, length, destination })
            .then( res => {
                console.log(res);
                navigate(`/mytrips`)
            })
            .catch( err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                setErrors(errorResponse);
            });
    }
    
    return (
        <div>
            <Navbar />
            <div className='whole-form'>
            
            <form onSubmit={submitHandler} >

                <h2 className='form-header'>Create a New Trip</h2>

                { Object.keys(errors).map((key) => (
                    <p key={key} className='error-message'>{ errors[key].message }</p>
                )) }

                <div className='form-section-1'>
                    <label>Name: </label>
                    <input type="text" name='name' value={name} onChange={ e => setName(e.target.value) } />
                </div>

                <div className='form-section-1'>
                    <label>Length: </label>
                    <input type="text" name='length' value={length} onChange={ e => setLength(e.target.value) } />
                </div>

                <div className='form-section-1'>
                    <label>Destination(s): </label>
                    <input type="text" name='destination' value={destination} onChange={ e => setDestination(e.target.value) } />
                </div>

                {/* { errors ? <p className='error-message'>{ errors }</p> : null } */}
                <br />
                <div className='form-options'>
                    <input type="submit" className='submit-button' value="Add to My Trips"/>
                    <Link to={'/'}>Cancel</Link>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default AddTrip;