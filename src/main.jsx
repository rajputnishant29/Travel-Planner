import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import CreateTrip from './components/create-trip'
import { Toaster } from "@/components/ui/toaster"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from'./view-trip/[tripId]/index.jsx'
import SignUp from './components/custom/SignUp.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import Login from './components/custom/Login.jsx'
import Leaflet from './components/custom/Leaflet.jsx'
import SafetyTips from './components/custom/SafetyTips.jsx'
import Vlogs from './components/custom/Vlogs.jsx'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
        <main>{children}</main>
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/create-trip',
    element: <CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/leaflet',
    element:<Leaflet/>
  },
  {
    path:'/safety-tips',
    element:<SafetyTips/>
  },
  {
    path:'/vlogs',
    element:<Vlogs/>
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
