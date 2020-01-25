import React, {Component}from 'react';
import Dashboard from './Components/Dashboard'; 
import Form from './Components/Form'; 
import Header from './Components/Header'; 
import axios from 'axios'; 
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={ 
      inventory: [],
      editProduct: null 
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

toggleEdit= (editId) =>{ 
  this.setState({
    editProduct: editId
  })
}

 render(){
   console.log(this.state.editProduct)
    return (
      <div className="App">
        <Header/>
        <Dashboard 
          inventory = {this.state.inventory} 
          reRender = {this.reRender}
          toggleEdit = {this.toggleEdit}
          />
        <Form
         reRenderFn = {this.reRender}
         editProduct = {this.state.editProduct}
        />
      </div>
    );
 }
}

export default App;
