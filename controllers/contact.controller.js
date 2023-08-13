const Contact = require("../model/contact.model")

const  getContact = async(req, res)=>{
     try {
         const contacts = await Contact.find();
         res.status(200).json(contacts)
     } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong"
        })
     }
}

const  createContact = async(req, res)=>{
    try {
          const newContact = await Contact({
            name : req.body.name,
            email : req.body.email,
            message : req.body.message
          });
          const contact = await newContact.save();
          res.status(201).json({
            message :"Submit Your message"
          })
    } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong"
        })
    }
}

const  deleteContact = async(req, res)=>{
    const isContact = await Contact.findOne({_id : req.params.id});
    try {
         if (isContact) {
             await Contact.findByIdAndDelete(req.params.id);
             res.status(200).json({
                message : "Contact Delete Successfull"
             })
         }
    } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong"
        })
    }
}

module.exports= {getContact, createContact , deleteContact}