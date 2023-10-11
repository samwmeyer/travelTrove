import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar';

const UpdateTrip = () => {
    
    const { id } = useParams();
    const [ name, setName ] = useState("");
    const [ length, setLength ] = useState("");
    const [ destination, setDestination ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios
            .get( `http://localhost:3000/api/trips/${id}` )
            .then( res => {
                console.log(res.data.name);
                setName(res.data.name);
                setLength(res.data.length);
                setDestination(res.data.destination);
            } )
            .catch( err => console.log(err) );
    }, [])
    
    const submitHandler = e => {
        e.preventDefault();
        axios
            .patch(`http://localhost:3000/api/trips/${id}`, { name, length, destination })
            .then( res => {
                console.log(res);
                navigate(`/mytrips`)
            })
            .catch( err => {
                const errorResponse = err.response.data.errors;
                console.log(err);
                setErrors(errorResponse);
            });
    }
    
    return (
        <div>
            <Navbar />
            <div className='whole-form'>
            
            <form onSubmit={submitHandler} >

                <h2 className='form-header'>Update Trip</h2>

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

                { errors ? <p className='error-message'>{ errors }</p> : null }
                <br />

                <div className='form-options'>
                    <input type="submit" className='submit-button' value="Update"/>
                    <Link to={'/mytrips'}>Cancel</Link>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default UpdateTrip;