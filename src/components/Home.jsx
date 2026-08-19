import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { updatetopaste } from "../redux/Pasteslice";
import { addtopaste } from "../redux/Pasteslice";
import { useDispatch } from "react-redux";
function Home() { 
    const [title,setTitle]=useState("")
    const[value,setValue]=useState("")
    const [searchparams,setSearchparams]=useSearchParams();
    const pasteid=searchparams.get("pasteid")
    const dispatch=useDispatch();
    function createpaste(){
  const paste={
    title:title,
    content:value,
    _id:pasteid || Date.now().toString(26),
    createdAt:new Date().toISOString()
  }
  if(pasteid){
    dispatch(updatetopaste(paste));

  }
  else{
    dispatch(addtopaste(paste));
  }

  setTitle("")
  setValue("")
  setSearchparams({})
    }
    return <>
<div className="flex flex-col gap-4 p-4">
    <input type="text" placeholder="search" className="border-2 border-black p-2 rounded-lg w-full" onChange={(e)=>setTitle(e.target.value)}></input>
    <button className="bg-blue-500 text-white p-2 rounded-lg w-full" onClick={createpaste}>
        {
            pasteid ? "update" : "create"
        }

    </button>
    </div> 
    <div>
        <textarea placeholder="write your paste here" className="border-2 border-black p-2 rounded-lg w-full h-96" onChange={(e)=>setValue(e.target.value)}></textarea>
        
        </div>   </>
}
export default Home