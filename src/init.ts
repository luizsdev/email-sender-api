import express from "express"
const app = express();
import 'dotenv/config'

app.listen(process.env.PORT,()=>{
    console.log("Server running on PORT " + process.env.PORT)
})
export default app
