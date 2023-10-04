import { Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/admin";
import UserList from './pages/admin/users';
import UserCreate from './pages/admin/users/create';


function App() {
  return (
    <Routes>
            <Route path="/admin" element={ <Dashboard /> } />
            <Route path="/admin/users" element={ <UserList /> } />
            <Route path="/admin/users/create" element={ <UserCreate /> } />
    </Routes>
  );
}

export default App;
