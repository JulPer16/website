import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { eveLogin, signOff } from '../lib/EveApi';

const Login = ({ isLogged, history }) => {

    const handleSignOff = () => {
        signOff();
        history.push('/');
    }

    if (isLogged === false){
        return (
            <div className="text-white font-semibold">
                <a href={eveLogin()}>Login</a>
            </div>
        )
    } else {
        return (
            <div className="text-white">
                <Link className="font-semibold mx-3" to="/profile">Profile</Link>
                <button className="font-semibold mx-3" onClick={handleSignOff}>Sign off</button>
            </div>
        )
    }


}

export default withRouter(Login);