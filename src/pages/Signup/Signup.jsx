    import React from 'react';
    import './signup.css';
    import Button from '../../components/Buttons/Button';

    const Signup = () => {
    return (
        <div className="form-box">
            <form className="form">
                <span className="title">Sign Up</span>
                <span className="subtitle">Lets Begin With Your Email Id</span>
                <div className="form-container">
                    <input type="text" className='input' placeholder='Full Name' />
                    <input type="email" className='input' placeholder='Email' />
                    <input type="password" className='input' placeholder='Password' />
                </div>
                <Button text="Sign Up" />
            </form>
            <div className="form-section">
                <p>Have an account? <a href="./">Log in.</a> </p>
            </div>
        </div>
    )
    }

    export default Signup
