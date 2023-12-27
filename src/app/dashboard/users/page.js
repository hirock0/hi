

import SearchEngine from '@/components/searchEngine/Search'
import Style from './user.module.css'
import { Data } from '@/lib/data/Data'
import AddUser from '@/components/addUser/addUser'
import DeleteUser from '@/components/deleteUser/deleteUser'
import ViewBtn from '@/components/view/view'

export default async function Users({searchParams}){
    const q = searchParams?.q || ""      
const data = await Data(q)
    return(
        <main className={Style.main}>
            <div className={Style.UserNav}>
                <div><SearchEngine/></div>
                <div><AddUser/></div>
            </div>


            <div className={Style.DataList}>
                <table className={Style.table} cellSpacing={5} border={1}>
                    <thead className={Style.thead}>
                        <tr className={Style.theadInTr}>
                            <td> <h4>Name</h4> </td>
                            <td> <h4>Fathers Name</h4> </td>
                            <td> <h4>Mothers Name</h4> </td>
                            <td> <h4>Roll No</h4> </td>
                            <td> <h4>Date of Birth</h4> </td>
                            <td> <h4>Mobile No</h4> </td>
                            <td> <h4>Nationality</h4> </td>
                            <td> <h4>Gender</h4> </td>
                            <td> <h4>Birth Reg</h4> </td>
                            <td> <h4>ID No</h4> </td>
                        </tr>
                    </thead>
                    <tbody className={Style.tbody}>
                        {
                            data.map((item)=>(
                                <tr key={item._id} className={Style.tbodyTr}>
                                    {<>
                                    
                                        <td className={Style.name}>{item.name}</td>
                                        <td>{item.fatherName}</td>
                                        <td>{item.motherName}</td>
                                        <td>{item.roll}</td>
                                        <td>{item.birthDate}</td>
                                        <td>{item.mobileNo}</td>
                                        <td>{item.nationality}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.birthregNo}</td>
                                        <td>{item.idNo}</td>
                                        <td><ViewBtn id={item._id}/></td>
                                        <td><DeleteUser id={item._id}/></td>
                                    </>
                                        
                                        
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}