//import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import UserCard from "../components/UserCard"
export default function Users(){
const location=useLocation()
console.log(location)
    const persons =[
        {
            name:"abel",
            age:21,
            profession:"applied computer science",
            country:"kenya"
        },
        {
            name:"john",
            age:26,
            profession:"nurisng",
            country:"uganda"
        },
        {
            name:"andrew",
            age:21,
            profession:"teacher",
            country:"uk"
        },
        {
            name:"john",
            age:25,
            profession:"law",
            country:"tanzania"
        },
        {
            name:"orogo",
            age:27,
            profession:"doctor",
            country:"canada"
        }
    ]
    return(<>
    <h1>user</h1>
    {
      persons.map((person,index)=>{
        return(<>
        <UserCard person={person} index={index}/>
</>)
      })
    }
    </>)
}
