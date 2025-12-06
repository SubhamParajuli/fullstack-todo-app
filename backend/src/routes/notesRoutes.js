import { getAllNotes,getANotes,createNotes,updateNotes,deleteNotes } from '../controllers/notesController.js';
import express from 'express'

const router=express.Router();

router.get('/',getAllNotes);

router.get('/:id',getANotes);

router.post('/create',createNotes)

router.put('/update/:id',updateNotes);

router.delete('/delete/:id',deleteNotes);

export default router




