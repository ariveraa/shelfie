import React from 'react'; 
import {Link, withRouter} from 'react-router-dom';

function Header(){
    return(
        <div>
              <Link to = '/' >Dashboard</Link>
              <Link to ='/add'>Add Product</Link> 
        </div>
    )
}

export default Header; 