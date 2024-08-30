import Flex from "./flex";
import img1 from '../images/Hammock.jpg';

const Header = () => {

    return(
        <div className = "header">
        <nav>
            <img src = {img1} id = "logo"/>
            <ul  className = "">
                <Flex>
                    <a href = ""><li>Home</li></a>
                    <a href = ""><li>About</li></a>
                    <a href = ""><li>Menu</li></a>
                    <a href = ""><li>Reservation</li></a>
                    <a href = ""><li>Login</li></a>
                    <a href = ""><li>Order Online</li></a>
                </Flex>
            </ul>
        </nav>
        </div>
    )
}



 
export default Header
