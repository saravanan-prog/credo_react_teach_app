import React from 'react';
import ReactDOM from 'react-dom/client';
// import AddStudent from './pages/A_add-student/AddStudent';
// import UpdateStudent from './pages/B_update-student/UpdateStudent';
//import DeleteStudent from './pages/D_delete-student/DeleteStudent';
import SearchStudent from './pages/C_search-student/SearchStudnet';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <SearchStudent />
   
  </React.StrictMode>
);


