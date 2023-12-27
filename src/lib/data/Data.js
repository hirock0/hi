
import mongoose from "mongoose"
import { SchemaData } from "../ScemaData/SchemaData"
import { connectionStr } from "../db"
export const Data = async(q)=>{
   await mongoose.connect(connectionStr)
    let regex = RegExp(q,"i")
    let getData = await SchemaData.find({name:{$regex:regex}})
    return getData
}