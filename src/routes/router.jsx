import {createBrowserRouter} from 'react-router';
import RootLayout from '../rootLayout/RootLayout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';

import BrowseListing from '../pages/BrowseListing';
import MyListing from '../pages/MyListing';
import AddRoommate from '../pages/AddRoommate';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Loader from '../components/Loader';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/add-roommate',
                element: <PrivateRoute>
                    <AddRoommate></AddRoommate>
                </PrivateRoute>
            },
            {
                path: '/browse-listing',
                loader: () => fetch('http://localhost:3000/roommates'),
                hydrateFallbackElement: <Loader></Loader>,
                Component: BrowseListing
            },
            {
                path: '/my-listing',
                Component: MyListing
            },
            {
                path: 'signIn',
                Component: SignIn
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])
export default router;