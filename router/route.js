const express = require('express');
const router = express.Router();
const { allproduct, addproduct, deleteproduct } = require('../controller/demo')

//CRUD APIs
//C CREATE
//R READ
//U UPDATE
//D DELETE
router.get("/api/allproduct", allproduct)
router.post("/api/addproduct", addproduct)
router.delete("/api/deleteproduct", deleteproduct)

module.exports = router