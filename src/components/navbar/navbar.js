import Image from 'next/image'
import SearchEngineHeader from '../searchEngine copy/Search'
import Style from './navbar.module.css'
export default function Navbar(){
    return(
        <div className={Style.main}>
            <SearchEngineHeader/>
            <div>
                <Image
                    src={"./bd-logo.png"}
                    width={40}
                    height={40}
                    alt='bdlogo'
                />

            </div>
        </div>
    )
}
