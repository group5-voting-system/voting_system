import AdminDashboard from './adminDash/dashboard';
import { TimerProvider } from './adminDash/timecontext';
import './App.css';

import React, { useState } from 'react';
import ServiceForm from './service form/mulitformservices';


function App() {
 


  return (
<>

    <TimerProvider initialDuration={30}>
        <AdminDashboard/>
   <ServiceForm/>
    </TimerProvider>
</>
  );
}

export default App;
