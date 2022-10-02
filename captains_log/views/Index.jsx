
const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component{
    render() {
        const {logs} = this.props
        return(
            <DefaultLayout title='Captains Logs' group='/logs'>
                <h1> All Captians Logs</h1>
                <ul id="logs-index">
                    {logs?.map((log) => {
                        return(
                            <li key={log._id}>  
                                   Captains Log: Star Date: {log.updatedAt.toLocaleDateString()}&nbsp;&nbsp;&nbsp; Star Time:{log.updatedAt.toLocaleTimeString()} <br/>Title: <a href={`/logs/${log._id}`}>{log.title}</a> <br/>Ship Status: {log.shipIsBroken ? "Ship is currently not operational" : "Ship is currently operational"}
                                   <p>
                                    
                                   </p>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/logs/New'>Create a New Log</a>
                </nav>
            </DefaultLayout>
        )
    }
}


module.exports = Index


