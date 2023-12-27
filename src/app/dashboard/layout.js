import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Style from './dash.module.css'
export default function DashLayout({children}){
    return(
        <main className={Style.main}>
            <div className={Style.mainIn}>
               
                    <div className={Style.sidebar}>
                        <Sidebar/>
                    </div>
       

                <div className={Style.navbar}>
                    <Navbar/>
                    
                </div>
                {children}
            </div>
        </main>
    )
}