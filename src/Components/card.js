const Card = (props) => {
    return (
        <article className = "card">
            <img src = {props.dish} alt = "" className = "dishImage"/>
            <div id ="dishTitle">
                <h3 >Greek Salad</h3>
                <h3 >$12.99</h3>
            </div>
            <div className = "card-description">
                <p>Little lemon: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, libero in vestibulum fermentum, </p>
                <p>Order Delivery</p>
            </div>
        </article>
    )
}

export default Card