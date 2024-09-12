import dish1 from "../images/GreekSalad.jpg"
import dish2 from "../images/GreekSalad.jpg"
import dish3 from "../images/GreekSalad.jpg"
import Card from './card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
const Specials = () => {
    return(
        <section id ="dishSection">
            <div id = "dishSection-Title">
                    <h1>This Week's Specials</h1>
            </div>
            <div className = "dishes">
                <Card dish = {dish1}/>
                <Card dish = {dish2}/>
                <Card dish = {dish3}/>
            </div>
            <div className="arrow-left">
                <FontAwesomeIcon icon = {faChevronLeft} size = "2x"/>
            </div>
            <div className="arrow-right">
                <FontAwesomeIcon icon = {faChevronRight} size = "2x"/>
            </div>
        </section>
    )
}

export default Specials