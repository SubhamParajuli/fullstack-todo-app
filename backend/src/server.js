import dotenv from"dotenv";
import cors from 'cors'
import express from 'express';


import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config()
const app=express()
const PORT=process.env.PORT || 5001


app.use(express.json());//parse the json body
app.use(rateLimiter);
app.use(cors({
    origin:"http://localhost:5173",
}))

app.use("/api/notes",notesRoutes);


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on PORT:${PORT}`);
    })
})