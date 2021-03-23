import React from 'react';

const Header = ({ title }) =>{

    return (
        <div className="bg-orange-600">
            <div className="flex flex-row items-center justify-between p-2 mx-auto container">
                <div>
                    <h1 className="font-semibold text-2xl text-white">{title}</h1>
                </div>
            </div>
        </div>
    );

}

export default Header;