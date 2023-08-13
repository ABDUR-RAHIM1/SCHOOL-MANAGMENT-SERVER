const Student = require("../model/student.model");

const getStudent = async (req, res) => {
    const search = req.query.search 
    try { 
        const student = await Student.find({name :{$regex : search} })
        res.status(200).json({student})
    } catch (error) {
        res.status(500).json({ message: 'Shomthing Went Wrong'})
    }
}

const createStudent = async (req, res) => {
    const body = req.body;

    try {
        const newStudent = await Student({
            name: body.name,
            email: body.email,
            photo : body.photo,
            phone: body.phone,
            roll: body.roll,
            class: body.class,
            group: body.group,
            session: body.session,
            bloodGroup: body.bloodGroup,
            address: body.address,
            birthDate: body.birthDate,
            guardianName: body.guardianName,
            guardianEmail: body.guardianEmail,
            guardianPhone: body.guardianPhone,
            emergencyContact: body.emergencyContact,
            religion: body.religion
        })

        const student = await newStudent.save()
        res.status(201).json({ message: "Student Create successfull", student })
    } catch (error) {
        res.status(500).json({ message: 'Shomthing Went Wrong', error : error.message })
    }
}

const updateStudent = async (req, res) => {
    try {
         const updateSt = await Student.findByIdAndUpdate(req.params.id, {
             $set : req.body
         }, {new :true}) 
         res.status(200).json({message :"update successfull", updateSt})
    } catch (error) { 
        res.status(500).json({ message: 'Shomthing Went Wrong'})
    }
}

const deleteStudent = async (req, res) => {
    const findStudent = await Student.findById(req.params.id)
    try { 
       if (findStudent) {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        const studentName = deleteStudent.name
        res.status(200).json({message :"Student Delete successfull", studentName})
       }else{
        res.status(200).json({message :"Student are not found"})
       }
    } catch (error) {
        res.status(500).json({ message: 'Shomthing Went Wrong'})
    }
}

module.exports = { getStudent, createStudent, updateStudent, deleteStudent }