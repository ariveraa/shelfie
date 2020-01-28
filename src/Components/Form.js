import React, {Component} from 'react';
import axios from 'axios'; 

class Form extends Component{ 
    constructor(){
        super()
        this.state = { 
            id: '', 
            name: '', 
            price: 0, 
            imgurl: '',
            editProduct:false
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
            this.setState({ 
                name:'', 
                price: 0, 
                imgurl:''
            })
            this.props.history.push('./')
        })     
    }

    editProduct = (id, name, price,imgurl) => {
        axios.put(`/api/product/${id}`, {name, price, imgurl}).then(()=> {
            this.setState({
                name:'',
                price:'',
                imgurl:'',
                editProduct:false
            })
            
        })
        this.props.history.push('/'); 
    }

    componentDidMount(){ 
       if(this.props.match.params.id){ 
           axios.get(`/api/product/${this.props.match.params.id}`)
           .then(res => {
                this.setState({ 
                id: res.data[0].id, 
                name: res.data[0].name, 
                price: res.data[0].price, 
                imgurl: res.data[0].imgurl, 
                editProduct: true
                
            })
            }
           )
       }
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
                    {this.props.editProduct === false? 
                        (<button onClick = {() => this.addProduct(name, price, imgurl)}>
                        Add to Inventory    
                        </button>): 
                        (<button onClick = {() => this.editProduct(this.state.id,name,price,imgurl)}>Save Changes</button>)}
                    
                </section>
            </div>
        )
    }
}

export default Form; 