const Contact = require("../models/Contact");

exports.postContact = async (req,res)=>{
    
    try {
        const newContact= new Contact({ ...req.body });
         if (!newContact.email){
             res.status(400).send({message :"email is required"});
             return;
         }
         const user =await Contact.findOne({ email : req.body.email });
         if(user){
            res.status(400).send({message :"email already exist"});
            return;
         }
 
        const response = await newContact.save();
        res.send({response:response,message:"user is saved"});
    } catch (error) {
        res.status(500).send("can not save it");
    }
     
 }

 exports.getAll=async (req,res) =>{
    try {
        const result = await Contact.find();
        res.send({response:result,message:"getting contact succefuly"});
    } catch (error) {
        res.status(400).send({message:"can not get contacts"});

        
    }

}

exports.getOne = async (req,res) =>{
    try {
        const result = await Contact.findOne({_id:req.params.id});
        if(!result){
            res.status(400).send({message:"there is no contact  with this id"});
            return;
        }
        else{
            res.send({response:result,message:"getting contact succefuly"});
            return;
        }
        res.send({response:result,message:"getting contact succefuly"});
    } catch (error) {
        res.status(400).send({message:"there is no contact  with this id"});  
    }

}
 exports.deleteOne= async (req,res) =>{
    try {
        const result= await Contact.deleteOne({_id:req.params.id});
        console.log(result);
        result.n
        ?res.send({message:"contact deleted"})
        :res.send({message:"there is no contact with this id"});
    } catch (error) {
        res.send({message:"there is no id"});
    }
}

exports.updateOne= async (req,res)=>{
    try {
        const result =await Contact.updateOne(
            {_id:req.params.id},
            {$set:{...req.body}
        });
        console.log(result);
        res.nModified 
        ?res.send({message:"update successfully"})
        :res.send({message:"allready updated"});
    } catch (error) {
        res.status(400).send({message:"update rejected"});
    }
}


