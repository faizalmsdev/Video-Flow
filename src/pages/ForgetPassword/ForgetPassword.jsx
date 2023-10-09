import React, { useState } from 'react';
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
        <div>
            <h2>Forgot Password</h2>
            {resetSent ? (
                <p>Reset email sent. Check your inbox for further instructions.</p>
            ) : (
                <form onSubmit={handleResetPassword}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
