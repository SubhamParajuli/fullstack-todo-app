export const getAllNotes=(req,res)=>{
    res.status(200).send('you fetched notes');
};

export const createNotes=(req,res)=>{
     res.status(201).json({message:"Note created successfully!"});
};

export const updateNotes=(req,res)=>{
    res.status(200).json({message:"Note updated successfully!"});
}
export const deleteNotes=(req,res)=>{
    res.status(200).json({message:"Note deleted successfully!"});
}