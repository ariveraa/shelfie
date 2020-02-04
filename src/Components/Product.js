import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; 
import devLogo from './DevMountain.jpg'



class Product extends Component{

    edit = id => {
        this.props.history.push(`/edit/${id}`)
    }

    render (){
     
        const {name,price,img,id} = this.props.productInfo;
        console.log(this.props.productInfo)
        return(
            <div className ='products'>
               {img === ''? (<img id= 'product-img' src= {devLogo} alt = 'dev logo' />): (<img id= 'product-img' src= {img} alt = 'product img'/>)}
              <div className = 'product-info' >
                <h3>{name}</h3>
                <p>${price}</p>
                <div className = 'product-button-box'>
                <button className = 'product-buttons' onClick = {() => this.props.deleteFn(id)}>Delete</button>
                <button className = 'product-buttons' onClick = {() => this.edit(this.props.productInfo.id)}>Edit</button>
               </div>   
                </div>
            </div>
        )
    }
}

export default withRouter(Product); 