const Chat = require("../model/chat.model")

const getChat = async(req, res)=>{
     try {
         const chat = await Chat.find();
         res.status(200).json(chat)
     } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong", 
        });
     }
}

const createChat = async(req, res)=>{
    const {senderName, senderPhoto,message,reciverName,reciverPhoto,messageType , image} = req.body
    try {
         const newChat = await Chat({
            senderName,
            senderPhoto,
            message,
            reciverName,
            reciverPhoto,
            messageType,
            image ,
         });
         const chat = await newChat.save();
         res.status(201).json({
            message : "send message",
            chat,
         });
    } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong", 
        });
    }
}


const deleteChat = async(req, res)=>{
    const isMessage = await Chat.findOne({_id : req.params.id})
    try {
          if (isMessage) {
              await Chat.findByIdAndDelete(req.params.id);
              res.status(200).json({
                message :"message deleted successfull"
              })
          }else{
              res.status(404).json({
                message : "Message not found"
              })
          }
    } catch (error) {
        res.status(500).json({
            message : "shomthing went wrong", 
        });
    }
}

module.exports = {getChat, createChat,deleteChat}