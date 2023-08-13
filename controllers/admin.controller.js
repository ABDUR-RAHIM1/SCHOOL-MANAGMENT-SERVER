const Admin = require("../model/admin.model");
const bcrypt = require('bcrypt');
const getAdmin = async (req, res) => {
    try {
        const data = await Admin.find();
        // find method return a array
        const adminList = data.map(admin => {
            // Destructure the admin object, excluding the password field
            const { password, ...adminDataWithoutPassword } = admin.toObject();
            return adminDataWithoutPassword;
        });
        res.status(200).json(adminList);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
};


const createAdmin = async (req, res) => {
    const email = await Admin.findOne({ email: req.body.email })
    const hashPassword =await bcrypt.hash(req.body.password , 10)
    const body = req.body;
    try {
        if (email) {
            res.status(404).json({ message: "email already exist" })
        } else {
            const newAdmin = await Admin({
                name: body.name,
                email: body.email,
                password: hashPassword,
                image: body.image
            });
            const admin = await newAdmin.save();
            res.status(201).json({ message: "admin create successfull", admin })
        }

    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})
    }
}

const loginAdmin = async (req, res) => {
    
    const admin = await Admin.findOne({ email: req.body.email });
    try {
        if (admin) {
            const isValidPassword = await bcrypt.compare(req.body.password, admin.password)
            if (isValidPassword) {
                const adminInfo = {...admin.toObject()}
                delete adminInfo.password
                res.status(200).json({message :"admin login successfull",adminInfo, status :true});
            }else{
                res.status(401).json({message:"Authentication failed", status:false})
            }
        }else{
            res.status(401).json({message :"Authentication failed", status :false})
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
};


const resetPassword = async(req , res)=>{  
     const {name , email} = req.body;
     try {
         const resetAdmin = await Admin.findOne({name})
          if (resetAdmin && resetAdmin.email===email) {
              const hashPassword =await bcrypt.hash(req.body.password , 10);
             await Admin.findByIdAndUpdate(resetAdmin, {
                 $set : {
                     password : hashPassword
                }
             }, {new : true});
             res.status(200).json({message:"password reset successfull"})
          }else{
            res.status(401).json({message:"provide valid username and email"})
          }
     } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
     }
}

const deleteAdmin = async (req, res) => {
    try {
        const findAdmin = await Admin.findOne({ _id: req.params.id })
        
        if (findAdmin || findAdmin !== null) {
            await Admin.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "admin deleted successfull" })
        } else {
            res.status(404).json({ message: "admin not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})

    }
}


module.exports = { getAdmin, createAdmin, loginAdmin,resetPassword, deleteAdmin }
