import React, { Component } from 'react'
import WithHoc from './WithHoc'

class File3 extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h6 style={{ fontSize: 50 }}>Name is {this.props.name} on File 3</h6>
            </div>
            
        )
    }
}

export default WithHoc(File3)
