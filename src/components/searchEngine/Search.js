"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Style from './search.module.css'
export default function SearchEngine({params}){
    console.log(params);

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter()

    const UrlHandler = (e)=>{
        let  Paramas = new URLSearchParams(searchParams);
        if(e.target.value){
            Paramas.set("q",e.target.value);
        }
        else{
            Paramas.delete("q")
        }
        replace(`${pathname}?${Paramas}`)
    }

    return(
        <div><input className={Style.inp} placeholder='Search...' type='text' onChange={UrlHandler}/></div>
    )
}