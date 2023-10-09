    import React, { useState } from 'react';
    import './signup.css';
    import Button from '../../components/Buttons/Button';
    import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
    import { Link , useNavigate } from 'react-router-dom';

    const Signup = () => {
        const [fullName ,setFullName] = useState('');
        const[email,setEmail] = useState('');
        const[password,setPassword]=useState('');
        const navigate = useNavigate();

        const handleSignUp = async(e) =>{
            e.preventDefault();

            try{
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth,email,password);
                const user = userCredential.user;
                //Reset to normal after successful login
                setEmail('');
                setFullName('');
                setPassword('');

                console.log('User signed up', user);
                return navigate("/src/pages/Main/Main.jsx")
            }catch(err){
                console.log(err);
            }
        };
    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSignUp}>
                <span className="title">Sign Up</span>
                <span className="subtitle">Lets Begin With Your Email Id</span>
                <div className="form-container">
                    <input type="text" className='input' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' />
                    <input type="email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <input type="password" className='input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                </div>
                <Button text="Sign Up" type="submit"/>
            </form>
            <div className="form-section">
                <p>Have an account? <Link to={"/"}>Log in.</Link> </p>
            </div>
        </div>
    )
    }

    export default Signup
