import React from 'react';
import{Switch, Route} from 'react-router-dom'; 
import Dashboard from  './Components/Dashboard'; 
import Form from './Components/Form'; 

 const Routes =(props) => {
    return( 
        <Switch> 
            <Route exact path ='/' component = {Dashboard} />


            <Route path = '/add' component ={Form}/>

            <Route path = '/edit/:id'  component ={Form}/> 
        </Switch>
    )
}

export default Routes