import Flex from "./flex";
import img1 from '../images/Hammock.jpg';
import ResPag from "./BookingPage";
import {Link, useMatch, useResolvedPath} from "react-router-dom"

const Header = () => {

    return(
        <div className = "header">
        <nav>
            <img src = {img1} id = "logo"/>
            <ul  className = "">
                <Flex>
                    <Link to = "/"><li>Home</li></Link>
                    <a href = "/About"><li>About</li></a>
                    <a href = "/Menu"><li>Menu</li></a>
                    <Link to = "/Reservations"><li>Reservation</li></Link>
                    <a href = "/Login"><li>Login</li></a>
                    <Link to = "/OrderOnline"><li>Order Online</li></Link>
                </Flex>
            </ul>
        </nav>
        </div>
    )
}



 
export default Header
