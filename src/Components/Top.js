import top from "../images/top.jpg"
const Top = (props) => {
    return (
        <div className = "top">
            <div className="top-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className = "top-p">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, libero in vestibulum fermentum, </p>
                </div>
                <button id = "reserve-button" type = "btn-btn-primary">Reserve a table</button>
            </div>
            <div className = "top-right">
                <div className ="top-right-img">
                    <img src = {top}></img>
                </div>
            </div>
        </div>
    )
}

export default Top