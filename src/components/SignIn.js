import React, { useRef, useState } from 'react'
import { Container, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const email = useRef();
    const pWord = useRef();
    const confPWord = useRef();
    const { signIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handelSubmit(e) {
        e.preventDefault();
        if (pWord.current.value !== confPWord.current.value) {
            return setError('Passwords don\'t match');
        }
        
        try {
            setError('');
            setLoading(true);
            await signIn(email.current.value, pWord.current.value);
            navigate('/Profile');    
        } catch (error){
            console.log(error);
            setError('Couldn\'t SignIn, invalid email or email is already in use');
        }
        setLoading(false);  
    }

    return (
        <>
            <Container>
                <h2 className='w-100 text-center mb-4'>Sign In</h2>
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
                    <Form.Group id='confPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={confPWord} required />
                    </Form.Group>
                    <Button className='w-100 mt-2' type='submit'disabled={loading}>
                        SignIn
                    </Button>  
                </Form>
                <div className='w-100 text-center mb-2'>
                    Have an existing account?
                    <Link to='/login'>Log In </Link>
                </div>
            </Container>
        </>    
        );
}