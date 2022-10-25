import data from "./data"
function Analysis (props) {
    return(
        <div id='analysis'>
            <h1> Sentiment Analysis </h1>
            <div id='list'>
                <span className="numb"> {data.analysis1} </span>
                <span className="numb"> {data.analysis2} </span>
                <span className="numb"> {data.analysis3} </span>
            </div>
        </div>
        //i did the css first, map wouldve messed me up with the list format, sorry for being lazy :( )
    )
}
export default Analysis