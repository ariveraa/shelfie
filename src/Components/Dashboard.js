import React, {Component} from 'react';
import Product from './Product'; 

class Dashboard extends Component{
    render (){
        return(
            <div>
                Dashboard
                <Product/>
            </div>
        )
    }
}

export default Dashboard; 