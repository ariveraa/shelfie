import React, {Component} from 'react';
import Product from './Product'; 
import axios from 'axios'; 

class Dashboard extends Component{

    delete = id => {
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.props.reRender(); 
        })
    }

    render (){
        return(
            <div id = 'inventory-box'>
                Dashboard
                {this.props.inventory.map((element) =>{
                    return( 
                        <Product
                            key = {element.id}
                            productInfo ={element}
                           deleteFn = {this.delete}
                           toggleEdit = {this.props.toggleEdit}
                        />
                    )
                }
                )}
            </div>
        )
    }
}

export default Dashboard; 