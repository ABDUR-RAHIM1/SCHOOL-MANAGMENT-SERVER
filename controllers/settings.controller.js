const {Logo, Hero, Testimonial} = require("../model/settings.model")

const getLogo = async(req, res) =>{
      try {
        const logo = await Logo.find();
        res.status(200).json(logo)
      } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
      }
}

const createLogo = async(req, res) =>{
    try {
        const newLogo = await Logo({
           logo : req.body.logo,
        });
        const logo = await newLogo.save();
        res.status(201).json({message :"logo uploaded successfull", logo})
   } catch (error) {
       res.status(500).json({message :"shomthing went wrong"})
   }
}

const deleteLogo = async(req, res)=>{
     try {
          const findLogo = await Logo.findOne({_id : req.params.id});
           if (findLogo) {
             const deletedLogo = await Logo.findByIdAndDelete(req.params.id);
             res.status(200).json({message : "logo deleted successfull", deletedLogo})
           }
     } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
     }
}
//  logo api end here

//  hero api statr here

const getHero =async(req, res)=>{
    try {
        const hero = await Hero.find();
        res.status(200).json({hero})
    } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
        
    }
}
const CreateHero =async(req, res)=>{
    const body = req.body;
    try {
        const newHero = await Hero({
             title : body.title,
             desc : body.desc,
             add : body.add , 
             image : body.image
        });
        const hero = await newHero.save();
        res.status(201).json({message : "hero content upload successfull", hero})
    } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
    }
}
const UpdateHero =async(req, res)=>{
    try {
         const updatedHero  =  await Hero.findByIdAndUpdate(req.params.id, {
            $set : req.body,
         },{new : true} );
         res.status(200).json({message :"Hero Content Updated successfull", updatedHero})
    } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
    }
}


//  testimonial slider start here
const getTestimoal = async(req, res)=>{
     try {
         const testi = await Testimonial.find();
         res.status(200).json(testi)
     } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
     }
}
const createTestimoal = async(req, res)=>{
    const body = req.body;
      try {
        const newTesti =await Testimonial({
            name : body.name,
            profession : body.profession,
            review : body.review,
            image : body.image
        })
        const testi = await newTesti.save();
        res.status(201).json({message :"Submit your review "})
      } catch (error) {
         res.status(500).json({message :"shomthing went wrong"})
      }
};

const updateTestimoal = async(req, res)=>{
      try {
         const updatedTesti = await Testimonial.findByIdAndUpdate(req.params.id, {
             $set : req.body,
         },{new : true} );
         res.status(200).json({message:"testimonial updated successfull"})
      } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
      }
};

const deleteTestimoal = async(req, res)=>{
    try {
        const findTesti = await Testimonial.findOne({_id : req.params.id})
        if (findTesti) {
            await Testimonial.findByIdAndDelete(req.params.id)
            res.status(200).json({message :"testimonial deleted successfull"})
        }else{
            res.status(400).json({message :"testimonial not found"})
        }
    } catch (error) {
        res.status(500).json({message :"shomthing went wrong"})
    }
}

//  testimonial slider start here



module.exports = {getLogo, createLogo , deleteLogo , getHero ,CreateHero ,UpdateHero , getTestimoal, createTestimoal , updateTestimoal , deleteTestimoal  }