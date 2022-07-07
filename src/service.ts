import { Request,Response } from "express"
import app from  "./init"

app.get("/alo",(req: Request,res: Response)=>{
    res.send("Working fine!")
})
