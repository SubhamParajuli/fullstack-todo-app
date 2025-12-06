import Note from "../models/Note.js"
export const getAllNotes= async (_,res)=>{
   try {
    const notes=await Note.find().sort({createdAt:-1})
    res.status(200).json(notes)
   } catch (error) {
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({message:'internal server error'})
   }
};

export const getANotes= async (req,res)=>{
   try {
    const searchednote=await Note.findById(req.params.id)
    res.status(200).json(searchednote)
   } catch (error) {
    console.error("Error in getting a Note controller",error)
    res.status(404).json({message:'Note not found.'})
   }
};

export const createNotes=async (req,res)=>{
     try {
        const {title,content}=req.body
        const note=new Note({title,content})

        const savednote=await note.save()
        res.status(201).json(savednote)
     } catch (error) {
        console.error("Error while posting:",error)
        res.status(500).json({message:"Internal server error"})
     }
};

export const updateNotes=async (req,res)=>{
    try {
        const {title,content}=req.body
        const updatedNotes=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})

        if(!updatedNotes)return res.status(404).json({message:"Note not found"})
        res.status(201).json(updatedNotes)
    } catch (error) {
        console.error("Error while updating:",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const deleteNotes=async (req,res)=>{
  try {
    const deletedNotes=await Note.findByIdAndDelete(req.params.id)
    if(!deletedNotes)return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"Note deleted successfully"})

  } catch (error) {
    console.error("Error while deleting:",error)
    res.status(500).json({message:"Internal server error"})
  }
}