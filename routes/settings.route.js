const router = require("express").Router();
const { getLogo, createLogo, deleteLogo, getHero, CreateHero, UpdateHero, getTestimoal, deleteTestimoal, updateTestimoal, createTestimoal } = require("../controllers/settings.controller");


router.get("/logo", getLogo)
router.post("/logo", createLogo) 
router.delete("/logo/:id", deleteLogo)

//  hero route 
router.get("/hero", getHero)
router.post("/hero", CreateHero)
router.put("/hero/:id", UpdateHero) 

// testimonial route 
router.get("/testimonial", getTestimoal)
router.post("/testimonial", createTestimoal)
router.put("/testimonial/:id", updateTestimoal)
router.delete("/testimonial/:id", deleteTestimoal)


module.exports = router;