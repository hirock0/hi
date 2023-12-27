
import Link from 'next/link'
import Style from './view.module.css'
export default function ViewBtn(props){
    let id = props.id
    return(
        <div>
           <Link href={`/dashboard/users/${id}`}><button className={Style.viewBtn}>View</button></Link>
        </div>
    )
}