const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component{
    render(){
        return(
            <DefaultLayout title='Create a New Log' group='/logs'>
                <h1> New Captains Log</h1>
                <form action='/logs' method='POST'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' name='title'/>

                    <label htmlFor='entry'>Entry:</label>
                    <input type='textarea' id='entry' name='entry'/>

                    <label htmlFor='shipIsBroken'>Is our ShipBroken:</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken'/>

                    <input type='submit' value='submit'/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = New