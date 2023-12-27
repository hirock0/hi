import mongoose from "mongoose"
const StudentData = new mongoose.Schema({
    
name:String,
fatherName:String,
motherName:String,
roll:String,
birthDate:String,
mobileNo:String,
email:String,
password:String,
address:String,
nationality:String,
gender:String,
birthregNo:String,
idNo:String
})
export const SchemaData = mongoose.models.students|| mongoose.model("students",StudentData)