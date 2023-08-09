import './App.css';
import NavigationBar from './Component/NavigationBar'
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//import Page
import Login from './Page/Login'
import ProductAll from './Page/ProductAll'
import PrivateRoute from './Route/PrivateRoute';

function App() {
  const [authenticate,setAuthenticate]=useState(false);

  return (
    <div>
      <NavigationBar setAuthenticate={setAuthenticate} authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/detail/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
