//import React from 'react'
//import ReactDOM from 'react-dom/client'
/*import './App.css'
import {ThemeProvider} from './components/ThemeContext'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './components/Auth/Login';
import MovieList from './components/admin/ShowList';
import TheaterList from './components/owner/TheaterList';
import RegisterTheater from './components/owner/RegisterTheater';
import ShowList from './components/owner/ShowList';
import AddShow from './components/owner/AddShow';
import BookingForm from './components/user/BookingForm'
import Dashboard from './pages/Dashboard';
import Register from './components/Auth/Register';
import AdminDashboard from './pages/AdminDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import UserDashboard from './pages/UserDashboard';
import UserHome from './components/user/UserHome';
import UsersDetails from './components/admin/UsersDetails';
import AdTheaterList from './components/admin/AdTheaterList';
import Bookings from './components/owner/Bookings';


const router = createBrowserRouter([
  {
    path: "/dashboard",
   element: <Dashboard /> 
   },
  {
    path: "/",
    element: <Login />
  },
  {
    path:"/admin-dashboard",
    element:<AdminDashboard/>
  },
  {
    path:"/owner-dashboard",
    element:<OwnerDashboard/>
  },
  {
    path:"/user-dashboard",
    element:<UserDashboard/>
  },


  {
   path:"/register",
   element:<Register/>
  },
  
  {
    path: "/movies",
    element: <MovieList />
  },
  {
    path: "/theaterlist",
    element: <AdTheaterList />
  },
  {
     path:"/userslist",
     element:<UsersDetails/>
  },


  {
    path: "/theaters",
    element: <TheaterList />
  },
  {
   path:"/addtheater",
   element: <RegisterTheater />
  },
  {
    path:"/shows",
     element:<ShowList />
  },
  {
    path:"/addshows",
    element:<AddShow />
  },
  { path:"/userhome",
     element: <UserHome />
  },
  {
    path:"/bookings/:showId",
    element: <BookingForm />
  },
  {
    path:"/allbookings",
    element:<Bookings/>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap your app in ThemeProvider }
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

*/
///////////////////////////////////////////////////////////////////////////////////////////////


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
)