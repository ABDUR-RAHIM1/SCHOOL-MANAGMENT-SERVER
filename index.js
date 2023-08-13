const app = require("./app");
const mongoose = require("mongoose")
require('dotenv').config()
const PORT = process.env.PORT || 8000;


const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connect")
    } catch (error) {
        console.log("Database not Connected", error)
    }
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectDb()
});
 