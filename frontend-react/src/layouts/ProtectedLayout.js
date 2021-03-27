import React from 'react';
import { Redirect } from 'react-router';

import Header from '../components/Header';
// import Footer from '../components/Footer';

const ProtectedLayout = (props) => {

    if (!localStorage.getItem("access_token") || !localStorage.getItem("refresh_token")){
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header title={process.env.REACT_APP_NAME} isLogged={true} />
            <div className="min-h-screen flex flex-col">
                {
                    props.children
                }
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default ProtectedLayout;