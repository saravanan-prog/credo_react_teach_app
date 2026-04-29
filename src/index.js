import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoPage1 from './Pages/DemoPage1';
import DemoPage2 from './Pages/DemoPage2';
import DemoPage3 from './Pages/DemoPage3'
import DemoPage4 from './Pages/DemoPage4';
import DemoPage5 from './Pages/DemoPage5';
import Events from './Pages/Events';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DemoPage1 /> */}
    {/* <DemoPage2 /> */}
    {/* { <DemoPage3 /> } */}
    {/* <DemoPage4 /> */}
    {/* <DemoPage5/> */}
    <Events/>
  </React.StrictMode>
);


