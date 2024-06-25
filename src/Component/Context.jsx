import { createContext, useState } from "react"

const ListContext=createContext()
function Context(props)
{
    const [stulist,setstulist]=useState([
        {
            id:1,
            name:"Krishna",
            favourite:false
        },
        {
            id:2,
            name:"Prathi",
            favourite:false
        },
        {
            id:3,
            name:"Saran",
            favourite:false
        },
        {
            id:4,
            name:"Achu",
            favourite:false
        },
        {
            id:5,
            name:"Kapi",
            favourite:false
        }
    ])
    return(
        <>
        <ListContext.Provider value={{stulist,setstulist}}>
        {props.children}
        </ListContext.Provider>
        </>
    )
}

export default Context
export {ListContext}