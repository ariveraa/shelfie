import React from 'react'; 
import {Link, withRouter} from 'react-router-dom';

import logo from './logo.png'
function Header(){
    return(
        <div className = 'Header'>
            <img id= 'logo' src ={logo} alt ='logo'/> 
            <h2 id = 'title'>SHELFIE</h2>
              <Link className ='links' to = '/' >Dashboard</Link>
              <Link className ='links' to ='/add'>Add Product</Link> 
        </div>
    )
}

export default Header; 