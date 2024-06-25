import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ListContext } from './Context'
function FavouritList()
{
    const {stulist,setstulist} = useContext(ListContext)

    const handledel = (removeid) => {
        removeid.favourite = false
       console.log(stulist);
       setstulist([...stulist]);
    }

    return(
        <>
            <div className="bg-[#4C2B36] flex py-5 px-5 gap-10 justify-center">
                <h1 className="text-[#FFFDF7] text-3xl cursor-pointer border-b-2 border-[#4C2B36] hover:border-white">
                    <Link to={"/"}>List of Students</Link>
                </h1>
                <h1 className="text-white text-3xl cursor-pointer  border-b-2 border-white">Favourite Students</h1>
            </div>
            <ul >
                {
                    stulist.map((item,index)=>{
                        return(
                            <>
                                {
                                    item.favourite?<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto lg:w-6/12	 align-middle">
                                    <p className="text-2xl">{index+1}.{item.name}</p>
                                    <button className="bg-red-600 text-white py-1 px-4 rounded-md mr-5" onClick={()=>{handledel(item)}}>Remove</button>
                                    </li>:""
                                }
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default FavouritList