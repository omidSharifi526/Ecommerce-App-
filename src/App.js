
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFoundPage from './Pages/404/NotFoundPage';
import Dashboard from './Pages/Dashborad/Dashboard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>

      <div className='container-fluid'>
        
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </div>
     




    </Router>

  )
    
}

export default App;
