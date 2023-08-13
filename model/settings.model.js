const mongoose = require("mongoose")

const logoScema = mongoose.Schema({
     logo: { type: String, required: true },
     date: { type: Date, default: Date.now }
})

//  hero model 
const heroScema = mongoose.Schema({
     title: { type: String, required: true },
     desc: { type: String, required: true },
     add: { type: String, required: true },
     image: { type: String, required: true },
     date: { type: Date, default: Date.now }
});

//  testimoal model
const testiSchema = mongoose.Schema({
     name : {type :String, required : true},
     profession : {type :String, required : true},
     review : {type :String, required : true},
     image : {type : String },
     date : {type :Date, default : Date.now},
});

const Logo = mongoose.model("logo", logoScema)
const Hero = mongoose.model("hero", heroScema)
const Testimonial = mongoose.model("testimonial", testiSchema)
module.exports = { Logo, Hero, Testimonial };