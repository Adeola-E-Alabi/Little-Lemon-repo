import Flex from "./flex"
const Header = () => {

    return(
        <div className = "header">
        <nav>
            <ul  className = "">
                <Flex>
                    <img src = "Logo.jpg"></img>
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
