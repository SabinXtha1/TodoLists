'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useSession,signOut } from "next-auth/react";
import axios from 'axios';
import Todos from './Todos';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TodoList = () => {
  const [tasks, settasks] = useState()
  const [datashow, setdatashow] = useState(false)
  const [editData, seteditData] = useState(false)
    const { data: session } = useSession();
    const [formData, setformData] = useState({
      task:'',
      description:'',
      email:session.user.email,
      username:session.user.name
    })
    const dataGet = async ()=>{
      const res = await axios.post('/api',  {email:session.user.email})


      console.log(res.data.todo);
      settasks(res.data.todo);
      setdatashow(true)
      
    }
    console.log(tasks);
    
    useEffect(() => {
       dataGet()
    },[] )
    const deleteTodo=async (ID,e)=>{
      if(e.target.name=='delete'){

        try{
          console.log(e.target.name);
          
          const res = await axios.delete('/api',{
            params:{
              mongoID:ID
            }
          })
          toast.success('TODO DELETE')
          dataGet()
        }catch{
          console.log('error')
        }
      }
      
      if(e.target.name=='done'){
        try{

             const req = await axios.put('/api',{},{
                params:{
                  mongoID:ID
                }
               })
               dataGet()
               toast.success('TODO DONE')
        }catch{
          console.log('error')

        }
      }

    }
    const edit =async(ID,task,description)=>{
      console.log(ID,task,description);
      console.log(editData);
      
      setformData({
        task:task,
        description:description,
        mongoID:ID
      })
      toast.success('TODO UPDATING')
      
      
    }
    const updatedTask=async()=>{
      const res= await axios.put('/api/fetcher',     
   {},{   
     params:{
      
       "mongoID[ID]":formData.mongoID,
        "mongoID[task]":formData.task,
        "mongoID[description]":formData.description
      
 }})
 toast.success('TODO UPDATED')
  dataGet()
  seteditData(false)
     setformData({
      task:'',
      description:'',
      email:session.user.email,
      username:session.user.name
     })
    }

  
    
    
    const dataSet=async(e)=>{
          
           setformData(pre=>({...pre,[e.target.name]:e.target.value}))
           
          }
          const dataFinal=async(e)=>{
               try{

                 console.log(formData);
                 const response = await axios.post('/api/fetcher',formData)
                 console.log(response);
                 
                 setformData({
                  task:'',
      description:'',
      email:session.user.email,
      username:session.user.name
                  })
                  toast.success('TODO ADDED')
                  dataGet()
                }catch{
                  console.log('error while posting')
                }
                       
            }
  return (
    <div>
         <div className='heading bg-gray-900 text-black text-bold flex justify-between  py-3 px-10 items-center p-2'>
          <h1 className='text-xl font-bold flex justify-center items-center gap-3 font-serif'>
           <Image src="/action.jpg" alt='Logo'  width={50} height={50} className='rounded-full'/>
           <p className='text-purple-500'>

            Action Plan
           </p>
          </h1>
          <button onClick={()=>signOut()} className='bg-red-500 px-4 py-2 rounded-full m-1 hover:bg-red-700 text-white ' >
            SignOut
          </button>
         </div>
         <div className="flex items-center justify-center flex-col mt-10 space-y-4">
  <h1 className="text-3xl font-bold text-gray-100">Todo List</h1>
  <input
    type="text"
    name='task'
    placeholder="Enter Your Task"
        onChange={dataSet}
        value={formData.task}
    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-semibold"
  />
  <textarea
    type="text"
    name='description'
    placeholder="Enter The Task Description"
      onChange={dataSet}
      value={formData.description}
    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-semibold"
  />

  {
    editData?(<button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" 
     onClick={updatedTask}  >
  
    Updated Todo
    
    </button>):(
    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" onClick={dataFinal}
    >
    Add Task
  </button>)
  }
</div>
<div className='m-2 overflow-scroll'>
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10 rounded-">
        <thead className="text-xs text-white uppercase bg-orange-600 ">
            <tr>
                <th scope="col" className="  py-4  text-center">
                   ID/Date
                </th>
                <th scope="col" className="  py-4 text-center">
                    Title
                </th>
                <th scope="col" className="  py-4  text-center">
                    Description
                </th>
                <th scope="col" className="  py-4  text-center">
                    Status
                </th>
                <th className='text-center'>
                  Action
                </th>
            </tr>
        </thead>
        <tbody>

{datashow ? (
  tasks.map((i, j) => {
    return ( <Todos task={i} key={j} id={j+1} rem={deleteTodo} edit={edit} seteditData={seteditData}/>
      
      
    );
  })
) : (
  <tr><td>
    LOading....
    </td></tr>
)}
</tbody>
</table>
</div>

    </div>
  )
}

export default TodoList