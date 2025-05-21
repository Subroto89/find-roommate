import {createBrowserRouter} from 'react-router';
import RootLayout from '../rootLayout/RootLayout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';

import BrowseListing from '../pages/BrowseListing';
import MyListing from '../pages/MyListing';
import AddRoommate from '../pages/AddRoommate';

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
                Component: AddRoommate
            },
            {
                path: '/browse-listing',
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