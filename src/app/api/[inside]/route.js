
import { SchemaData } from "@/lib/ScemaData/SchemaData";
import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Data } from "@/lib/data/Data";

export async function GET(request,content){
    let Id = content.params.inside;
    let id = {_id:Id}
    try{
        await mongoose.connect(connectionStr)
        let data = await SchemaData.findOne(id)
        return NextResponse.json(data)
    }catch(err){
        throw new Error("File not found") 
        
    }
}

export async function PUT(request,content){
    let Id = content.params.inside;
    let id = {_id:Id}
    try{
        let data1 = await request.json()
        await mongoose.connect(connectionStr)
        let data2 = await SchemaData.findByIdAndUpdate(id,data1)
         return NextResponse.json(data2)
    }catch(err){
        throw new Error("File not found")
    }

}
export async function DELETE(request,content){
    try{
        let Id = content.params.inside;
        let id = {_id:Id}
        await SchemaData.findByIdAndDelete(id)
        await mongoose.connect(connectionStr)
        return NextResponse.json({result:"Data is deleted"})
    }catch(err){
        throw new new Error("Faild to delete")
    }


}// Return a list of `params` to populate the [slug] dynamic segment
