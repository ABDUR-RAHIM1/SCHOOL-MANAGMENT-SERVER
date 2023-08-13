const Result = require("../model/result.model");

const getResullt = async (req, res) => {
    const search = req.query.search 
    try {
          if (search && search.length > 0) {
            const result = await Result.find({examTime : {$regex : search}})
            res.status(200).json({message : "result", result})
          }else{
            const result = await Result.find()
            res.status(200).json({message : "result", result})
          }
    } catch (error) {
        res.status(500).json({ message: "Shomthing Went Wrong",})
    }
}

const getUniqueResult = async(req, res)=>{
    const search = req.query.search
     const uResult = await Result.find({studentName : req.body.studentName,examTime : {$regex : search} })
     try {
        if (uResult && uResult.length > 0  && uResult[0].group === req.body.group) {
            const rs =await Result.find()
            res.status(200).json({message : "Your result", uResult})
         }else{
            res.status(404).json({message : " result not Found"})
         }
     } catch (error) {
        res.status(500).json({ message: "Shomthing Went Wrong" })
     }
}

const createResult = async (req, res) => {
    try {
        const newResult = await Result({
            studentName: req.body.studentName,
            group: req.body.group,
            score: req.body.score,
            category: req.body.category,
            examTime: req.body.examTime,

        });
        const result = await newResult.save()
        res.status(201).json({ message: "Upload Result successfull", result })
    } catch (error) {
        res.status(500).json({ message: "Shomthing Went Wrong" })
    }
}

const updateResult = async (req, res) => {
    try {
        const updateResult = await Result.findByIdAndUpdate(req.params.id , {
            $set : req.body
        }, {new : true})
        res.status(200).json({message :" Update successfull",updateResult})
    } catch (error) {
        res.status(500).json({ message: "Shomthing Went Wrong", error })
    }

}

const deleteResult = async (req, res) => {
     const deleteResult = await Result.findByIdAndDelete(req.params.id)
     try {
        res.status(200).json({message:"Result Delete successfull"})
     } catch (error) {
        res.status(500).json({ message: "Shomthing Went Wrong" })
     }
}


module.exports = { getResullt,getUniqueResult ,  createResult, updateResult, deleteResult }