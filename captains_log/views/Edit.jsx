const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <DefaultLayout title='Edit Current Log' group='/logs'>
                <h1> Edit Captains Log</h1>
                <form action={`/logs/${logs._id}?_method=PUT`} method='POST'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' name='title' defaultValue={logs.title}/>

                    <label htmlFor='entry'>Entry:</label>
                    <input type='textarea' id='entry' name='entry' defaultValue={logs.entry}/>

                    <label htmlFor='shipIsBroken'>Is our ShipBroken:</label>
                    <input type='checkbox' id='shipIsBroken' name='shipIsBroken' defaultChecked={logs.shipIsBroken}/>

                    <input type='submit' value='submit'/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit