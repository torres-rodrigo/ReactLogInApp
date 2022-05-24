import React, { useRef, useState } from 'react'
import { Container, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {
    const email = useRef();
    const pWord = useRef();
    const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handelSubmit(e) {
        e.preventDefault();
         
        try {
            setError('');
            setLoading(true);
            await logIn(email.current.value, pWord.current.value);
            if (email.current.value === 'dev@pwc.com') {
                navigate('/devprofile');
            }
            else {
                navigate('/Profile');
            }
                     
        } catch {
            setError('Couldn\'t log in user incorrect password or email');
        }
        setLoading(false);  
    }

    return (
        <>
            <Container>
                <h2 className='w-100 text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handelSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={email} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={pWord} required />
                    </Form.Group>
                    
                    <Button className='w-100 mt-2' type='submit'disabled={loading}>
                        LogIn
                    </Button> 
                    <div className='w-100 text-center mt-2'>
                     <Link to='/forgotpassword'>Forgot Password?</Link>
                    </div> 
                </Form>
                <div className='w-100 text-center mt-2'>
                    <Link to='/'>Create account</Link>
                </div>
            </Container>
        </>    
        );
}