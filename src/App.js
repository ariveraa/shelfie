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
      inventory: []
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

 render(){
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
 }
}

export default App;
