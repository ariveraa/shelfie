import React, {Component} from 'react';
import Product from './Product'; 
import axios from 'axios'; 


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            inventory: [],
        }
    }

    componentDidMount(){
        this.reRender()
    }

    
    reRender = () =>{ 
     
        axios.get('/api/inventory')
        .then(res => this.setState({
          inventory:res.data
        }))
        
    }
        

    delete = id => {
        axios.delete(`/api/product/${id}`)
        .then(() => {
            this.reRender(); 
        })
    }

    render (){
        console.log(this.state.inventory)
        return(
            <div id = 'inventory-box'>
              
                {this.state.inventory.map((element) =>{
                    return( 
                        <Product
                            key = {element.id}
                            productInfo ={element}
                           deleteFn = {this.delete}
                        //    toggleEdit = {this.props.toggleEdit}
                        />
                    )
                }
                )}
            </div>
        )
    }
}

export default Dashboard; 