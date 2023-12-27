import Link from 'next/link'
import Style from './adduser.module.css'
export default function AddUser(){
    return(
        <div>
            <Link href={`/dashboard/addUsers`}><button className={Style.addbtn}>Add User</button></Link>
        </div>
    )
}