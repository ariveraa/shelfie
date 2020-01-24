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
         
    }
}