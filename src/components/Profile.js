import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'


export default function Profile() {

    const [error, setError] = useState('');
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();
   
    async function handleLogOut() {
        setError('');

        try {
            await logOut();
            navigate('/Login');
        } catch  {
            setError('Failed to log out');
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='w-100 text-center mb-4'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    Email: {currentUser.email}

               </Card.Body>
                <Button variant='link' onClick={handleLogOut}>Log Out</Button>
            </Card>
        </>
    );
}
