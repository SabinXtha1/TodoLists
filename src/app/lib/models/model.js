import TodoList from "@/app/components/TodoList";
import mongoose from "mongoose";

const Shema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    isCompleted:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

const TodoModel = mongoose.models.todos || mongoose.model('todos',Shema)
export default TodoModel
