import React, { useState } from 'react';
import './forgetpassword.css';
import { auth, sendPasswordResetEmail } from '../../config/firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);
    const[error,setError] =useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setResetSent(true);
            setEmail('');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='login-form forget-form'>
            <h2>Forgot Password</h2>
            {resetSent ? (
                <p>Reset email sent. Check your inbox for further instructions.</p>
            ) : (
                <form onSubmit={handleResetPassword}>
                <div className='login-input-container'>
                <label>Email:</label>
                    <input className='input-content' type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <p className={`${error ? 'danger' : 'hide' }`}>Please check your mail id! </p>
                    {/* <button className='reset primary' type="submit">Reset Password</button> */}
                    <button className='button2' type='submit'>
                            <p>Reset Password</p>
                    </button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
