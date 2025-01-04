import { connectDB } from "@/app/lib/config/db";
import TodoModel from "@/app/lib/models/model";
import { NextResponse } from "next/server";


const loadDB=async()=>{
    await connectDB()
    console.log('mogococ');
    
   
}
loadDB()

export async function GET(request){
   
  
  const data = await TodoModel.find({})
 return NextResponse.json({
    data: data
 })

}

export async function POST(request){
    const {task,description,email,username} = await request.json()
    
    TodoModel.create({
        email,
        username,
        task,
        description,

    })
    
    return NextResponse.json({
        msg:'Data Has been Add'
    })
}
export async function PUT(request){
    const mongoId  = await request.nextUrl.searchParams.get('mongoID[ID]')
    const task = await request.nextUrl.searchParams.get('mongoID[task]')
    const description =await request.nextUrl.searchParams.get('mongoID[description]')

    console.log(task);
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
          task:task,
          description:description
        }
    })
    return NextResponse.json({
        msg:'Data Has been Update'
    })
}
