import { NextResponse } from "next/server";
import TodoModel from "../lib/models/model";

export async function POST(request) {
    const {email} = await request.json()
    console.log(email);
  const data = await  TodoModel.find({email
    
  })
  console.log(data);
   return NextResponse.json({
        todo:data
    })
}
export async function DELETE(request){
  const mongoId = await request.nextUrl.searchParams.get('mongoID')
  console.log(mongoId);
  
  await TodoModel.findOneAndDelete(mongoId)
  return NextResponse.json({
      msg:'Todo Has been Delete'
  })
}
export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoID')
    console.log(mongoId,'putram');
    
    await TodoModel.findByIdAndUpdate(mongoId,{
      $set:{isCompleted:true}})
    return NextResponse.json({
      msg:'Todo Has been Updated'
    })
}