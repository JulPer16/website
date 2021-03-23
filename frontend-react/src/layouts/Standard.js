import React from 'react';

import Header from '../components/Header';
// import Footer from '../components/Footer';

const Standard = (props) => {
    return (
        <div>
            <Header title={process.env.REACT_APP_NAME}/>
            <div className="min-h-screen flex flex-col">
                {
                    props.children
                }
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Standard