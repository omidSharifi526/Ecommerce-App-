import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
       
           

            <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
  
 <div className='container-fluid'>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item " activeClassName='active'>
        <NavLink className="nav-link" to="/dashboard"> <i class="fas fa-tachometer-alt"></i> پنل کاربر <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item" activeClassName='active'>
      <NavLink className="nav-link" to="/">ورود <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item" activeClassName='active'>
      <NavLink className="nav-link" to="/register">ثبت نام <span className="sr-only">(current)</span></NavLink>
      </li>

    </ul>
    
   
  </div>
 <NavLink className="nav-item  text-center text-success" to='/'>فروشگاه اینترنتی</NavLink>
 <div class="dropdown ">
  <button class=" dropdown-toggle btn btn-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="fas fa-user"></i>   کاربر 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">خروج</a>
    
  </div>
</div>
 </div>
</nav>
        
        
    )
}

export default Navbar
