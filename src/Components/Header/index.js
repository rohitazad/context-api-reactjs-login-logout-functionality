import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import { AuthContext } from '../../Context';

import './header.css';
const HeaderComponents = ()=>{
    const {isAuthentaicated, logout} = useContext(AuthContext)
    return (
        <>
            <ul className='topNavigation'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    {
                        isAuthentaicated ? <button onClick={logout}>logout</button> : <Link to='/login'>Login</Link>
                    }
                    
                </li>
                <li>
                    <Link to='/user'>User</Link>
                </li>
            </ul>
        </>
    )
}
export default HeaderComponents;