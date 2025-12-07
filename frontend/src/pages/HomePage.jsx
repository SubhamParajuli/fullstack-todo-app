import React, { useEffect } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
    const [isRateLimited, setIsRateLimited]=useState(false)
    const [notes,setNotes]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        const fetchNotes=async(_,res)=>{
            try {
                const res=await axios.get("http://localhost:5001/api/notes/")
                console.log(res.data)
                setNotes(res.data)
                setIsRateLimited(false)
            } catch (error) {
                console.log("Error fetching notes:", error);
                
            }
        }
    })
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/> }
    </div>
  )
}

export default HomePage
