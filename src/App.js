import React from 'react'
import './App.css'

// import Home from './component/Home'
// import File1 from './component/File1'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      count: 0,
      user: [{
        "id": 1,
        "name": "",
        "username": "",
        "email": "",
        "address": {
          "street": "",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }]
    });
    console.log("Constructor")
  }

  // componentWillMount
  componentDidMount(){
    console.log("Did mount")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then( data => {

      console.log(data)

      this.setState({
        user: data
      })

    }
    )
  }
  
  componentDidUpdate (previousProps, previousState){
    console.log("Did update",previousProps, previousState)
  }
  
  componentWillUnmount(){
    console.log("Will unmount")
  }

  render() {
    console.log("Render")

    return (
        <div className="App" >
          {/* <Home name="pa" />
          <File1 /> */}
          <h1>
            Name is {this.state.user[0].name}
          </h1>
        </div>          
    )
  }
}

export default App