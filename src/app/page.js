import Image from "next/image"
import Link from "next/link"
export default function Home(){
  return(
    <main>
      <div className="page-1">
        <div className='Header'>
          <div className="left">
            <Link href={`/dashboard`}><Image
              src="./menu-line.svg"
              width={20}
              height={20}
              alt="bdImage"
              className="menuLine"
            />
            </Link>
          </div>
          <div className="middle">middle</div>
          <div className="right">right</div>
        </div>
        <div className="Body">Body</div>
      </div>
    </main>
  )
}