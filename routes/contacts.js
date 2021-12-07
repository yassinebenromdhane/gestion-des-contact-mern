const express = require('express');
const Contact = require('../models/Contact');
const router=express.Router();
const controllers = require('../controllers/contact.controllers');

//test routing
router.get("/hello",(req,res)=>{

    res.send("hello routing");

});

//post contact **
//get all contacts **
//get contact by id **
//delete contact by id **
//update contact by id **

// @POST method
// @desc post a contact
// @path : http://localhost:5000/api/contact/
// @Params Body 
router.post("/",controllers.postContact);

// @Methode GET
// @desc get all contacts
// @Path: http://localhost:5000/api/contact/
router.get("/",controllers.getAll);

// @Methode GET
// @desc get one contact
// @Path: http://localhost:5000/api/contact/:id
// @Params id
router.get("/:id",controllers.getOne);

// @Method DELETE
// @desc delete a contact by id
// @Path : http://localhost:5000/api/contact/:id
// @Params id
router.delete("/:id",controllers.deleteOne);

// @Method PUT
// @desc update a contact
// @Path: http://localhost:5000/api/contact/:id
// @Params id Body
router.put("/:id",controllers.updateOne);






module.exports= router;