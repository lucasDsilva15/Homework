import data from "./data"
function Rating (props) {
    return(
        <div id='rating'>
            <h1> Average Rating</h1>
            <span className="num"> {data.ratings} </span>
        </div>
    )
}

export default Rating