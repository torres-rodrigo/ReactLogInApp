import React from 'react'
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import Profile from './components/Profile'
import ForgotPassword from './components/ForgotPassword'
import DevProfile from './components/DevProfile';
import Container from 'react-bootstrap/esm/Container';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{maxWidth: '600px'}}>
          <Router>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route element={<PrivateRoute />} >
                <Route path='/profile' element={<Profile />} />
                <Route path='/devprofile' element={<DevProfile />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
