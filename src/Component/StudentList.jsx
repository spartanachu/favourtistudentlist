import { useContext } from "react"
import { ListContext } from "./Context"
import { Link } from "react-router-dom"
function StudentList()
{
    const {stulist,setstulist}=useContext(ListContext)
    function handleaddfav(removeid) {
        removeid.favourite = true
        console.log(stulist);
        setstulist([...stulist]);
     }
    return(
        <>
        <div className="bg-[#4C2B36] flex py-5 px-5 gap-10 justify-center">
            <h1 className="text-white text-3xl cursor-pointer border-b-2 border-white">List Of Student</h1>
                <h1 className="text-3xl text-white cursor-pointer border-b-2 border-[#4C2B36] hover:border-white">
                    <Link to={"/fav"} >Favourites Student List</Link>
                </h1>
        </div>
        <div>
            <ul>
            {
                stulist.map((item,index)=>{
                    return(
                        item.favourite?<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto  lg:w-6/12	 align-middle">
                        <p className="text-2xl">{index+1}.{item.name}</p>
                        <button className="bg-black  py-1 px-4 rounded-md mr-5  text-red-500" onClick={()=>{handleaddfav(item)}}><i class="fa-solid fa-heart"></i></button>
                        </li>:<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto lg:w-6/12	 align-middle">
                        <p className="text-2xl">{index+1}.{item.name}</p>
                        <button className="bg-black text-white py-1 px-4 rounded-md mr-5" onClick={()=>{handleaddfav(item)}}><i class="fa-regular fa-heart"></i></button>
                        </li>
                    )
                })
            }
            </ul>
        </div>
        </>
    )
}

export default StudentList