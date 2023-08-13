const StudentProfile = require("../model/studentLogin.model")
const bcrypt = require('bcrypt');

//  get all student
const getStudent = async (req, res) => {
    try {
        const profile = await StudentProfile.find();
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong" })

    }
}

//  resgister student 
const resggisterStudent = async (req, res) => {
    const { name, email, password, image } = req.body;
    const hashPassword = await bcrypt.hash(password, 10)
    try {
        const existEmail = await StudentProfile.findOne({ email })
        if (existEmail) {
            res.status(404).json({ message: "Email Already Exist" })
        } else {
            const newProfile = await StudentProfile({
                name,
                email,
                password: hashPassword,
                image,
            });
            const profile = await newProfile.save();
            res.status(200).json({ message: "profile created successfull", profile })
        }

    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong" })
    }
};

//  login 
const loginStudent = async (req, res) => {
    const isEmail = await StudentProfile.findOne({ email: req.body.email })
    try {
        if (isEmail) {
            const { password, ...profile } = isEmail.toObject()
            const isValidPassword = await bcrypt.compare(req.body.password, isEmail.password)
            if (isValidPassword) {
                res.status(200).json({ message: "login successfull", profile, status: true })
            } else {
                res.status(404).json({ message: "authentication failed" })
            }
        } else {
            res.status(404).json({ message: "authentication failed" })
        }
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})

    }
};

// update student 
const updateStudent = async (req, res) => {
    res.send("UpdateStudent login")
}

//   reset password for user 
const resetPassword = async (req, res) => {
    const { email, name } = req.body;
    try {
        user = await StudentProfile.findOne({ name })
        if (user && user.email === email) {
            const hashPassword =await bcrypt.hash(req.body.password, 10)
            await StudentProfile.findByIdAndUpdate(user, {
                $set: {
                    password: hashPassword
                },
            }, { new: true });

            res.status(200).json({
                message: "Password reset successfull", 
            })

        } else {
            res.status(404).json({
                message: "please provide valid information"
            })
        }
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})
    }
}



//  delete studennt account 
const deleteStudent = async (req, res) => {
    const isStudent = await StudentProfile.findOne({ _id: req.params.id })
    try {
        if (isStudent) {
            await StudentProfile.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Student delete successfull" })
        } else {
            res.status(404).json({ message: "Student not found" })
        }
    } catch (error) {
        res.status(500).json({ message: "shomthing went wrong"})
    }
}
module.exports = { getStudent, resggisterStudent, loginStudent, resetPassword, updateStudent, deleteStudent }