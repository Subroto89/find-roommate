import {createBrowserRouter} from 'react-router';
import RootLayout from '../rootLayout/RootLayout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';

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
                path: 'signIn',
                Component: SignIn
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])
export default router;