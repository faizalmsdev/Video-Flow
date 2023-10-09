import React, { useState } from 'react';
import './forgetpassword.css';
import { auth, sendPasswordResetEmail } from '../../config/firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setResetSent(true);
        } catch (error) {
            console.error('Error sending reset email:', error);
        }
    };

    return (
        <div className='login-form forget-form'>
            <h2>Forgot Password</h2>
            {resetSent ? (
                <p>Reset email sent. Check your inbox for further instructions.</p>
            ) : (
                <form onSubmit={handleResetPassword}>
                <span >
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </span>
                    {/* <button className='reset primary' type="submit">Reset Password</button> */}
                    <button className='button' type='submit'>
                            <p>Reset Password</p>
                    </button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
