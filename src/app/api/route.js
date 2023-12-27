
import { SchemaData } from "@/lib/ScemaData/SchemaData";
import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
    try{
        await mongoose.connect(connectionStr)
        let data = await SchemaData.find()
        return NextResponse.json(data)
    }catch(err){
        throw new Error("File not found") 
        
    }
}
export async function POST(request,content){
    try{
        let PostData = await request.json();
        let data = await SchemaData(PostData)
        await mongoose.connect(connectionStr);
        data = await data.save()
        return NextResponse.json(data)
    }catch(err){
        throw new Error("file not found")
    }

}