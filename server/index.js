require ('dotenv').config(); 
const express = require ('express'), 
    app = express(), 
    ctrl = require('./controller'), 
    cors = require('cors'), 
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING} = process.env; 

   
    app.use(express.json());
    app.use(cors());

    app.get('/api/inventory', ctrl.getProducts); 
    app.post('/api/product', ctrl.addProduct); 
    app.delete('/api/product/:id', ctrl.deleteProduct); 
    app.put('/api/product/:id', ctrl.editProduct)

    massive(CONNECTION_STRING).then(db => {
        app.set('db', db);
        console.log('db connected'); 
 
        const port = SERVER_PORT; 
        app.listen(port, ()=> console.log(`server running on port: ${port}`)); 
    })



   