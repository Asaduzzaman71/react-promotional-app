import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/admin";
import UserList from './pages/admin/users';
import UserCreate from './pages/admin/users/create';
import BlogList from './pages/admin/blogs';
import BlogCreate from './pages/admin/blogs/create';
import './styles/dist/css/adminlte.min.css'
import './styles/plugins/fontawesome-free/css/all.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={ <Navigate to='/admin' /> } />
              <Route path="/admin" element={ <Dashboard /> } />
              <Route path="/admin/users" element={ <UserList /> } />
              <Route path="/admin/users/create" element={ <UserCreate /> } />
              <Route path="/admin/blogs" element={ <BlogList /> } />
              <Route path="/admin/blogs/create" element={ <BlogCreate /> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
