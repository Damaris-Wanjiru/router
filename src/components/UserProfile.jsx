import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
export default function UserProfile(){
    const location= useLocation()
    const user= location.state
    console.log(user)
   return(<>
   <NavBar/>
   <div className="abel">
    <h1>name:{user.name}</h1>
    <h2>age:{user.age}</h2>
    <h3>{user.profession}
    </h3>
    <h4>{user.country}</h4>
    </div></>)
}