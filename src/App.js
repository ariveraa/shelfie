import React, {Component}from 'react';
import Dashboard from './Components/Dashboard'; 
import Form from './Components/Form'; 
import Header from './Components/Header'; 
import axios from 'axios'; 
import './App.css';
import Routes from './Routes'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state ={ 
      
    }
  }
 



toggleEdit= (editId) =>{ 
  this.setState({
    editProduct: editId
  })
}

 render(){
  
    return (
      <div className="App">
        <Header/>
        <div> 
          <Routes/>
        </div>
      </div>
    );
 }
}

export default App;
