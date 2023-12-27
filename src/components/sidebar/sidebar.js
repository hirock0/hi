import Link from "next/link";
import { SIdebarData } from "../sidebarInformation/SideInfor"
import Style from './sidebar.module.css'
export default function Sidebar(){
    const SideInfor = SIdebarData;
    return(
        <div className={Style.main}>
            <ul className={Style.UlList}>
                {
                    SideInfor.map((item)=>(
                        <li key={item._id}>
                            <span><h2 key={item._id}>{item.title}</h2></span>
                            <span className={Style.subtit} key={item._id}>{item.list.map((item)=><Link key={item._id}  className={Style.subtitle} href={`${item.path}`}><button  className={Style.btn}>{item.title}</button></Link>)}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}