const React = require('react')

class DefaultLayout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='/css/style.css'/>
                </head>
                <body>
                    <nav>
                        <a href={`${this.props.group}`}>All Logs</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout