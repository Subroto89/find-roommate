import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import AddRoommate from "../pages/AddRoommate";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Loader from "../components/Loader";
import DetailsPage from "../pages/DetailsPage";
import MyListings from "../pages/MyListings";
import MyListingUpdate from "../pages/MyListingUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/add-roommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-listing",
        loader: () => fetch("find-roommate-server-gules.vercel.app/roommates"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseListing,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`find-roommate-server-gules.vercel.app/roommates/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listing/:email",
        loader: ({params}) => fetch(`find-roommate-server-gules.vercel.app/my-listings/${params.email}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
            <PrivateRoute>
                <MyListings></MyListings>
            </PrivateRoute>
        )
      },
      {
        path: "my-listing/particular/:id",
        loader: ({params}) => fetch(`find-roommate-server-gules.vercel.app/my-listings/particular/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element:(
            <PrivateRoute>
                <MyListingUpdate></MyListingUpdate>
            </PrivateRoute>
        )
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
export default router;
