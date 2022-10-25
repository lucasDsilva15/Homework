import data from "./data"
function Visitors (props) {
    return(
        <div id='visitors'>
            <h1>Website Visitors</h1>
            <span className='num'> {data.visitors} </span>
        </div>
    )
}
export default Visitors