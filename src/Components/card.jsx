import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTruck} from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    return (
        <article className = "card">
            <img src = {props.dish} alt = "" className = "dishImage"/>
            <div id ="dishTitle">
                <h3>{props.title}</h3>
                <h3>{props.price}</h3>
            </div>
            <div className = "card-description">
                <p>{props.description}</p>
                <div className="card-footer">
                    <p>Order Delivery</p>
                    <span><FontAwesomeIcon icon = {faTruck}/></span>
                </div>
            </div>
        </article>
    )
}

export default Card