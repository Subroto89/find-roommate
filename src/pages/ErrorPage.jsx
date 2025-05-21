import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
           <div className="flex flex-col items-center justify-center min-h-lvh space-y-5">
                <p className="text-4xl font-bold text-center"> 
                    <span className="text-orange-700 text-7xl">404</span> <br/> 
                    Oops! Page Not Fount
                </p>
                <Link to="/"
                      className="border-1 border-red-300 px-6 py-3 bg-amber-600 shadow rounded-lg">
                      Go Back Home
                </Link>
           </div>
        </div>
    );
};

export default ErrorPage;