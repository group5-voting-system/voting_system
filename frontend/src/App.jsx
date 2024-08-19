// src/App.js
import React from 'react';
// import { TimerProvider } from './comonamt/timecontext';
import { TimerProvider } from './page/adminDash/timecontext';
import Home from './page/Home';
// import AdminDashboard from './adminDash/AdminDashboard';
import AdminDashboard from './page/adminDash/dashboard';
import ServiceForm from './page/adminDash/mulitformservices';
import AdvertisementsSection from './page/adminDash/forhomepage';

function App() {
  return (
    <>
    <AdminDashboard/>
<ServiceForm/>
    <AdvertisementsSection/>
    {/* <TimerProvider  initialTime={{ days: 0, hours: 0, minutes: 1, seconds: 30 }} > */}
{/* <Home/> */}

    {/* </TimerProvider> */}
    
    </>
  );
}

export default App;