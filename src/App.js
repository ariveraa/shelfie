import React, {Component}from 'react';

import Header from './Components/Header'; 

import './App.css';
import Routes from './Routes'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state ={ 
      
    }
  }

 render(){
  
    return (
      <div className="App">
        <Header />
        <div> 
          <Routes toggleEdit = {this.toggleEdit}/>
        </div>
      </div>
    );
 }
}

export default App;
