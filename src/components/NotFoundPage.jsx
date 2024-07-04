import {Link } from 'react-router-dom';
import NavBar from './NavBar';
import ErrorImg from "../assets/error.jpeg"

function NotFoundPage(){
    return(
        <>
        <NavBar />
        <div className='flex flex-col gap 2'>
            <img src = {ErrorImg} />
            <h1>404 Page Not Found </h1> 
            <Link to = "/" >Home Page from link</Link>
            <h3>Try again, Failiure is a step closer to success</h3>
        </div>
        </>
    )
}
export default NotFoundPage;