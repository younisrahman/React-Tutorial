import React from 'react'


class About extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>This is About Page</h1>
                <button onClick={()=>{
                    this.props.history.push('/')
                }}>Go Back Home</button>
            </div>
        )
    }
}

export default About