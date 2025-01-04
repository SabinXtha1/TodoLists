import React from 'react'
import { FaEdit } from "react-icons/fa";
const Todos = ({task,id,rem,edit,seteditData}) => {

    
  return (
    <tr className=" border-b bg-gray-900 text-white">
    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap text-center flex" >
      <p className='font-bold px-1'>{id})</p>
       {task.date.slice(0,10)}
      
    </th>
    <td className="px-6 py-4 text-center">
       {task.task}
    </td>
    <td className="px-6 py-4 text-center">
       {task.description}
    </td>
    <td className="px-6 py-4 text-center">
       {task.isCompleted?'Completed':'Pending'}
    </td>
    <td className='py-1 px-2 flex gap-1 justify-center text-center'>
      <button className='bg-purple-400 p-3 rounded-sm' onClick={()=>{edit(task._id,task.task,task.description) 
        seteditData(true);}}>
        <FaEdit/>
      </button>
      <button  className='py-1 px-2 bg-red-500 text-white rounded-xl' name='delete'  onClick={(e)=>rem(task._id,e)} >
        Delete
      </button>
      {
        task.isCompleted?'':
      <button name='done'  className='py-2 px-4 bg-green-500 text-white rounded-xl' onClick={(e)=>rem(task._id,e)
      }>
        Done
      </button>
      
      }
     
      
    </td>
</tr>
  )
}

export default Todos