import React, {Component} from 'react';
import axios from 'axios'; 

class Form extends Component{ 
    constructor(){
        super()
        this.state = { 
            name: '', 
            price: 0, 
            imgurl: '',
            editProduct:null
        }
        this.handleChange = this.handleChange.bind(this); 
        this.addProduct=this.addProduct.bind(this); 
    }

    handleChange(event){ 
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }

    cancelChange = () => {
        this.setState({
            name:'',
            price:0, 
            imgurl:'', 
            editProduct: null
        })
    }
 
    addProduct = (name, price, imgurl) => {
        axios.post('/api/product',{name,price,imgurl}).then(() => { 
            this.props.reRenderFn(); 
            this.setState({ 
                name:'', 
                price: 0, 
                imgurl:''
            })
        })     
    }

    editProduct = (id, name, price,imgurl) => {
        axios.put(`/api/product/${id}`, {name, price, imgurl}).then(()=> {
            this.setState({
                name:'',
                price:'',
                imgurl:'',
                editProduct:null
            })
            this.props.reRenderFn();
        })
    }
 

    componentDidUpdate(prevProp){
        if(prevProp.editProduct !== this.props.editProduct){
            this.setState({
                editProduct: this.props.editProduct,
                name:this.props.editProduct.name,
                price: this.props.editProduct.price,
                imgurl: this.props.editProduct.imgurl
            })
        }
    }


    render(){
        const {name, price, imgurl} = this.state; 
        return(
            <div> 
                <img/>
                <p>Image URL:</p>
                <input placeholder = 'Enter URL Here' 
                name = 'imgurl' 
                value = {imgurl} 
                onChange = {event => this.handleChange(event)}/>
                <p>Product Name:</p>
                <input placeholder= 'Enter Name Here' 
                name = 'name' 
                value = {name}
                onChange = {event => this.handleChange(event)}/>
                <p>Price:</p>
                <input placeholder = 'Enter Price Here' 
                name = 'price' 
                value = {price}
                onChange = {event => this.handleChange(event)} /> 
                <section id = 'form-buttons'>
                    <button onClick ={()=> this.cancelChange()}>Cancel</button>
                    {this.state.editProduct === null? 
                        (<button onClick = {() => this.addProduct(name, price, imgurl)}>
                        Add to Inventory    
                        </button>): 
                        (<button onClick = {() => this.editProduct(this.state.editProduct.id,name,price,imgurl)}>Save Changes</button>)}
                    
                </section>
            </div>
        )
    }
}

export default Form; 