import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicForm from './Pages/A_basic-form/BasiscForm';
import UncontrolledForm from './Pages/A_basic-form/UncontrolledForm';
import JsonLoginForm from './Pages/B_Json-form/JsonLoginForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JsonLoginForm />
  </React.StrictMode>
);

