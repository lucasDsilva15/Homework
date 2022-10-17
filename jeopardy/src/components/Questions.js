
export default function Questions ({question}) {
    
    function loadingQuestion () {
        return(
            <>
            <h1>Loading Question...</h1>
            </>
        )
    }
    function loadedQuestion() {
        return(
            <>
            <h2> Catergory: {question.category.title.toString()}</h2>
            <h2> Value: {question.value}</h2>
            <h1>Answer: {question.question} </h1>
            </>
        )  
    }
    
    return question ? loadedQuestion() : loadingQuestion()
}