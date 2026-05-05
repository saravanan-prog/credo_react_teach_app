import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicForm from './Pages/A_basic-form/BasiscForm';
import JsonLoginForm from './Pages/B_Json-form/JsonLoginForm';
import BasicFormik from './Pages/C_Formik-form/BasicFormik';
import BasicFormikYup from './Pages/D_formik-yup-validation/BasicFormikYup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasicFormikYup />
  </React.StrictMode>
);

