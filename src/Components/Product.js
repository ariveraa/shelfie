import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; 

class Product extends Component{

    edit = id => {
        this.props.history.push(`/edit/${id}`)
    }

    render (){
     
        const {name,price,imgurl,id} = this.props.productInfo;
        return(
            <div>
                Product:
                <img src= {imgurl} alt= 'https://github.com/DevMountain/simulation-1/blob/master/assets/views/part1_view.png?raw=true' />
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick = {() => this.props.deleteFn(id)}>Delete</button>
                <button onClick = {() => this.edit(this.props.productInfo.id)}>Edit</button>
            
            </div>
        )
    }
}

export default withRouter(Product); 