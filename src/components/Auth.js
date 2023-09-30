    import React from 'react';
    import Login from "../pages/Login/Login";
    import Signup from '../pages/Signup/Signup';
    import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

    const Auth = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path='/Sign-up' element={<Signup />} />
            </Routes>
        </Router>
    )
    }

    export default Auth
