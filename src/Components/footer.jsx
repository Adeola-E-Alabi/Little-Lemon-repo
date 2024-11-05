import footerImg from "../images/Little Lemon Logo.png"
import Testimonial from "./costumerSay"
const Footer = () => {

    return(
        <div className="footer">
            <Testimonial/>
            <div className = "caption">
                <img src = {footerImg}/>
                <p>Copyright ⓒ 2024</p>
            </div>
        </div>
    )
}


export default Footer