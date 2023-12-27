'use client'
import Style from './delete.module.css'
export default function DeleteUser(props){
    let id = props.id
    const DeleteHandler= async()=>{
        let deladata = fetch(`http://localhost:3000/api/${id}`,{
            method:"DELETE"
        })
        return deladata
    }
    return <div>
        <form><button className={Style.DeleteBtn} onClick={DeleteHandler}>Delete</button></form>
    </div>
}