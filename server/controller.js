module.exports = { 
    getProducts: (req,res) => {
        const db = req.app.get('db'); 

        db.get_products().then(products => {
            res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err)); 
    }, 
    addProduct: (req,res) =>{ 
        const db = req.app.get('db'); 
        const{name,price, imgurl} = req.body;
         

         db.add_product([name,price, imgurl]).then(() => res.sendStatus(200));
         
    }, 
    deleteProduct: (req,res) => {
        const db  = req.app.get('db'); 
        const{id} = req.params; 

        db.delete_product(id).then(data => res.sendStatus(200))
    },
    editProduct: (req,res) => {
        const db =req.app.get('db'); 
        const {id} =req.params
        const {name,price, imgurl} = req.body; 

        db.edit_product([id,name,price,imgurl]).then(()=> res.sendStatus(200));
    }
}