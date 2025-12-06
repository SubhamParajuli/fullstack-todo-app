import express from 'express';
import notesRoutes from './routes/notesRoutes.js'

const app=express()
const PORT=5001

app.use("/api/notes",notesRoutes);
app.listen(PORT,()=>{
    console.log(`Server started on PORT:${PORT}`);
})