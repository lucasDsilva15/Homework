import data from './data'
function Reviews (props) {
    return(
        <div id='reviews'>
            <h1> Reviews </h1>
            <span className="num"> {data.reviews} </span>   
        </div>    
    )
}
export default Reviews