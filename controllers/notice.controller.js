const Notice = require("../model/notice.model")

const getNotice = async (req, res) => {
    try {
        const notice = await Notice.find();
        res.status(200).json(notice)
    } catch (error) {
        res.status(500).json({ message: "Shomthing went wrong" })
    }
}
const creatNotice = async (req, res) => {
    try {
        const newNotice = await Notice({
            title: req.body.title,
            desc: req.body.desc
        })
        const notice = await newNotice.save()
        res.status(201).json({ message: "notice upload successfull", notice })
    } catch (error) {
        res.status(500).json({ message: "Shomthing went wrong", error: error.message })
    }
}

const updateNotice = async (req, res) => {
    try {
        const updateNotice = await Notice.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true })
        res.status(200).json({ message: "updated successfull", updateNotice })
    } catch (error) {
        res.status(500).json({ message: "Shomthing went wrong" })
    }
}


const deleteNotice = async (req, res) => {
    const findNotice = await Notice.findOne({_id : req.params.id})
    
    try {
        if (findNotice) {
            const deleteNotice = await Notice.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: "notice deleted successfull" })
        } else {
            res.status(400).json({ message: "Notice not found}" })
        }
    } catch (error) {
        res.status(500).json({ message: "Shomthing went wrong" })
    }

}


module.exports = { getNotice, creatNotice, updateNotice, deleteNotice }