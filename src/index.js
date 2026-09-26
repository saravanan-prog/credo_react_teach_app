import React from 'react';
import ReactDOM from 'react-dom/client';



import BasicFormikYup from './Pages/D_formik-yup-validation/BasicFormikYup';
import JsonLoginForm from './Pages/A_Json-form/JsonLoginForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JsonLoginForm />
  </React.StrictMode>
);

