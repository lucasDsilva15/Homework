const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <DefaultLayout title={`${logs.title}`} group='/logs'>
                <h1> {logs.title} </h1>
                <p>
                    {logs.entry}
                </p>
                <p>
                    {logs.shipIsBroken ? "Ship is currently not operational" : "Ship is currently operational"}
                </p>
                <button>
                    <a href={`/logs/${logs._id}/edit`}>Edit</a>
                </button>
                <form action={`/logs/${logs._id}?_method=DELETE`} method="POST">
                    <input type='submit' value="Delete"/>
                </form>
                <p>
                    <a href='/logs'>Back</a>
                </p>
           </DefaultLayout>
        )
    }
}

module.exports = Show