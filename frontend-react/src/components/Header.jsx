import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

const Header = ({ title, isLogged }) =>{

    return (
        <div className="bg-orange-600">
            <div className="flex flex-row items-center justify-between p-2 mx-auto container">
                <Link to='/'>
                    <h1 className="font-semibold text-2xl text-white">{title}</h1>
                </Link>
                <Login isLogged={isLogged} />
            </div>
        </div>
    );

}

export default Header;