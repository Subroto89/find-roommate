import {createBrowserRouter} from 'react-router';
import RootLayout from '../rootLayout/RootLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            }
        ]
    }
])
export default router;