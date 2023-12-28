import { Data } from "@/lib/data/Data"


export default async function page(props){
    let id = props.params.dets
    let dat = await fetch(`http://localhost:3000/api/${id}`)
    dat  = await dat.json()
    console.log(dat);
    return(
        <div>
            {
                <h1>name:{dat.name}</h1>
            }
        </div>
    )
}
// export async function getStaticProps(){
//         const response = await fetch("http://localhost:3000/api");
//         const data = await response.json();
//         console.log(data);
//         return{
//             props:{
//                 post:data
//             }
//         }
      
// }



   export async function generateStaticParams(){
    const res = await fetch(`http://localhost:3000/api/`)
    let data = await res.json()
    return  data.map((item)=>({
        props: item.props
    }))

    }