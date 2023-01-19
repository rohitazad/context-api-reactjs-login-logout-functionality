import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../../Context';
import {useNavigate} from 'react-router-dom';
import './user.css';
const UserContainer = ()=>{
    const {user} = useContext(AuthContext);
    console.log('user',user)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("tocken")){
            navigate('/login')
        }
    },[])
    return (
        <>
        {
            user ? <table className='userTable'>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{user.firstName}</td>
                </tr>
                <tr>
                    <td>lastName </td>
                    <td>{user.lastName}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>image</td>
                    <td><img src={user.image} alt="user image"/></td>
                </tr>
                <tr>
                    <td>username</td>
                    <td>{user.username}</td>
                </tr>
                
            </tbody>
        </table> : 'Please login first '
        }
            
        </>
    )
}
export default UserContainer;