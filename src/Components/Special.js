import dish1 from "../images/GreekSalad.jpg"
import dish2 from "../images/GreekSalad.jpg"
import dish3 from "../images/GreekSalad.jpg"
import Card from './card'
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
        </section>
    )
}

export default Specials