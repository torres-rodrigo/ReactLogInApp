import React, { useRef, useState } from 'react'
import { Container, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'

export default function ForgotPasswod() {
    const email = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    async function handelSubmit(e) {
        e.preventDefault();
         
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(email.current.value);
            setMessage('An email has been sent to reset your password');
                     
        } catch {
            setError('Couldn\'t reset password');
        }
        setLoading(false);  
    }

    return (
        <>
            <Container>
                <h2 className='w-100 text-center mb-4'>Forgot Password</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='succes'>{message}</Alert>}
                <Form onSubmit={handelSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={email} required />
                    </Form.Group>
                    <Button className='w-100 mt-2' type='submit'disabled={loading}>
                        Reset Password
                    </Button> 
                </Form>
                <div className='w-100 text-center mt-2'>
                    <Link to='/login'>Log In</Link>
                </div>
            </Container>
        </>    
    );
}