import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component{

    render() {
        return (
             <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-700">
                <div className="text-white">
                    <h1 className="text-4xl font-bold text-center">
                        Page 404
                    </h1>
                    <Link to="/">
                        <h2 className="text-2xl mt-4">
                            Back to main page
                        </h2>
                    </Link>
                </div>
             </div>
        );
    }

}

export default Page404;