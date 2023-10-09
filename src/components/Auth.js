    import React from 'react';
    import Login from "../pages/Login/Login";
    import Signup from '../pages/Signup/Signup';
    import ForgotPassword from '../pages/ForgetPassword/ForgetPassword';
    import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

    const Auth = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path='/Sign-up' element={<Signup />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </Router>
    )
    }

    export default Auth
