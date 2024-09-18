import dish1 from "../images/GreekSalad.jpg"
import dish2 from "../images/Bruschetta.jpg"
import dish3 from "../images/Pasta.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Card from './card'
import{useState} from 'react'
import { useScreenContext } from "../context/ScreenContext"

const Specials = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, libero in vestibulum fermentum,"
    const dish = [{img: dish1, description: paragraph, title:"Greek Salad", price: "12.99"},
                  {img: dish2, description: paragraph, title:"Bruschetta", price: "8.99"},
                  {img: dish3, description: paragraph, title:"Pasta Alla Vodka", price: "14.99"}]


    return(
        <section id ="dishSection">
            <div id = "dishSection-Title">
                    <h1>This Week's Specials</h1>
            </div>
            <div className = "dishes">
                {dish.map( SOTD => {return(
                    <Card dish = {SOTD.img} description = {SOTD.description} title = {SOTD.title} price = {SOTD.price}/>
                )})}
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