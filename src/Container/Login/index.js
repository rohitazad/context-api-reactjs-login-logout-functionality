import React, {useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../Context';
import {useNavigate} from 'react-router-dom';
import './login.css';

const LoginContainer = ()=>{
    const {login,isAuthentaicated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    
    const checkLoginStaus = ()=>{
        const _isLogin = isAuthentaicated;
        setIsLoggedin(_isLogin);
    }

    useEffect(()=>{
        checkLoginStaus();
    }, [])

    useEffect(()=>{
        checkLoginStaus();
        if(isLoggedin){
            navigate('/user');
        }
    },[isLoggedin, navigate, isAuthentaicated])

    console.log('isAuthentaicated',isAuthentaicated);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const {username, password} = event.target.elements;
        // login function call
        login(username.value, password.value)
    }
    return (
        <>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>
                    <span>User Name:-</span>
                    <input type="text" placeholder='enter your user name' name='username' />
                </label>
                <label>
                    <span>Password:-</span>
                    <input type="password"  name='password' />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default LoginContainer;