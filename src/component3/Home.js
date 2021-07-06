import React from 'react'

import {Link} from 'react-router-dom'


class Home extends React.Component {

    state={
        user:[
            {"id":"01","name": "Asu"},
            {"id":"02","name": "Naim"},
            {"id":"03","name": "Younis"}
        ]
    }


    render() {

        const myname = this.state.user.map(item =>{
            return <Link to={"/"+item.name}><h3> {item.name}</h3></Link>
        })
        return (
            <div>
                <h1>This is Home Page</h1>
                {myname}
            </div>
        )
    }
}

export default Home

