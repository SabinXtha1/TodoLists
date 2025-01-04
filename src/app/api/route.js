import { NextResponse } from "next/server";
import TodoModel from "../lib/models/model";

export async function POST(request) {
    const {email} = await request.json()
  
  const data = await  TodoModel.find({email
    
  })

   return NextResponse.json({
        todo:data
    })
}
export async function DELETE(request){
  const mongoId = await request.nextUrl.searchParams.get('mongoID')
  
  
  await TodoModel.findOneAndDelete(mongoId)
  return NextResponse.json({
      msg:'Todo Has been Delete'
  })
}
export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoID')
   
    
    await TodoModel.findByIdAndUpdate(mongoId,{
      $set:{isCompleted:true}})
    return NextResponse.json({
      msg:'Todo Has been Updated'
    })
}