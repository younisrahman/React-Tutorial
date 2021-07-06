import React, { Component } from 'react'
import WithHoc from './WithHoc'


class Home extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h6 style={{ fontSize: 50 }}>Name is {this.props.name}</h6>
            </div>
        )
    }
}

export default WithHoc(Home)
