import React, {Component} from 'react';
import axios from 'axios'; 

class Product extends Component{



    render (){
        console.log(this.props)
        const {name,price,imgurl,id} = this.props.productInfo;
        return(
            <div>
                Product:
                <img src= {imgurl} alt= 'https://github.com/DevMountain/simulation-1/blob/master/assets/views/part1_view.png?raw=true' />
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick = {() => this.props.deleteFn(id)}>Delete</button>
                <button onClick = {() => this.props.toggleEdit(this.props.productInfo)}>Edit</button>
            
            </div>
        )
    }
}

export default Product; 