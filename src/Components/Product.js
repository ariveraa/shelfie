import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; 
import devLogo from './DevMountain.jpg'

class Product extends Component{

    edit = id => {
        this.props.history.push(`/edit/${id}`)
    }

    render (){
     
        const {name,price,imgurl,id} = this.props.productInfo;
        return(
            <div className ='products'>
                Product:
                <img id = 'productImg' src= {imgurl} alt= {devLogo} />
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick = {() => this.props.deleteFn(id)}>Delete</button>
                <button onClick = {() => this.edit(this.props.productInfo.id)}>Edit</button>
            
            </div>
        )
    }
}

export default withRouter(Product); 