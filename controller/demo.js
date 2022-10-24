const { product } = require('../model/product')

//insert a product
const addproduct = async(req, res) => {
    try {
        const addprod = new product({
            productname: req.body.productname,
            price: req.body.price,
        })
        let insertprod = await addprod.save();
        res.send("Product Insert successfully")
    } catch (e) {
        res.send(e)
        console.log(e)
    }
}

//get all product
const allproduct = async(req, res) => {
    try {
        const allprod = await product.find({})
        res.send(allprod)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

//delete product
const deleteproduct = async(req, res) => {
    try {
        let _id = req.query.id
        const getstdspe = await product.findByIdAndDelete(_id)
        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = { addproduct, allproduct, deleteproduct }