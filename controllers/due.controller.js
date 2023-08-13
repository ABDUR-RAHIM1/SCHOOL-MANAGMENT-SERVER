const Due = require("../model/due.model")

const getDue = async (req, res) => {
    const search = req.query.search; 
    try {
        const dueAmmount = await Due.find({studentName : {$regex : search}})
        res.status(200).json({ message: "dues", dueAmmount })
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong" })
    }
}


const createDue = async (req, res) => {
    const body = req.body;

    try {
        const newDue = await Due({
            studentName: body.studentName,
            studentClass: body.studentClass,
            itemName: body.itemName,
            itemPrice: body.itemPrice,
            itemQuntity: body.itemQuntity
        })
        const createDue = await newDue.save()
        res.status(201).json({ message: "due create successfull", createDue })
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})
    }
};


const updateDue = async (req, res) => {
    try {
         const updateDue = await Due.findByIdAndUpdate(req.params.id, {
            $set : req.body,
         }, {new :true});
         res.status(200).json({message :"Due Update successfull", updateDue})
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong" })
    }
};

const deleteDue = async (req, res) => {
    try {
        const deleteDue = await Due.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Due delete successfull", deleteDue })
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})
    }
}

module.exports = { getDue, createDue, updateDue, deleteDue }