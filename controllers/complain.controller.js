const Complain = require("./complain.model");

const getComplain = async (req, res) => {
    try {
        const complain = await Complain.find();
        res.status(200).json(complain)
    } catch (error) {
        res.status(500).json({
            message: "shomthing went wrong",
        })
    }
}


    const createComplain = async (req, res) => {
        const {name, email , title, desc, image } = req.body;
        try {
            const newComplain = await Complain({
                name,
                email,
                title,
                desc,
                image,
            });
            await newComplain.save();
            res.status(201).json({
                message: "submit your complain",
            })
        } catch (error) {
            res.status(500).json({
                message: "shomthing went wrong",
            })
        }
    }


    // const updateComplain = async (req, res) => {
    //     try {
    //         await Complain.findByIdAndUpdate(req.params.id, {
    //             $set : req.body,
    //         }, {new :  true});
    //         res.status(200).json({
    //             message :"successfully update your complain"
    //         })
    //     } catch (error) {
    //         res.status(500).json({
    //             message: "shomthing went wrong",
    //             error: error.message
    //         })
    //     }
    // }


    const deleteComplain = async (req, res) => {
        const isComplain = await Complain.findOne({_id : req.params.id})
        try {
             if (isComplain) {
                await Complain.findByIdAndDelete(req.params.id);
                res.status(200).json({
                   message : "successfully Delete Your complain"
                })
             }else{
                res.status(200).json({
                    message : "complain not found"
                 })
             }
        } catch (error) {
            res.status(500).json({
                message: "shomthing went wrong",
            })
        }
    }


    module.exports = { getComplain, createComplain, deleteComplain }