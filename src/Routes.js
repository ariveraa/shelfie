import React from 'react';
import{Switch, Route} from 'react-router-dom'; 
import Dashboard from  './Components/Dashboard'; 
import Form from './Components/Form'; 

 const Routes =(props) => {
    return( 
        <Switch> 
            <Route exact path ='/' component ={Dashboard} />

            <Route path = '/add' render = {() => {
                return <Form 
                reRenderFn = {props.reRender}/>
            }} />

            <Route path = '/edit/:id'  render = {() => {
                return <Form 
                reRenderFn = {props.reRender} 
                editProduct = {props.editProduct}/>
            }} />
        </Switch>
    )
}

export default Routes