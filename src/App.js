import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        innerName: "Name",
        nextName: "name"
      },
      id : 1
    };
    console.log("Constructor")
  }

  // state = {
  //   name: 'Naim'
  // }


  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).
      then(res => res.json()).
      then(data => {
        console.log(data)
        this.setState({
          name: { ...this.state.name, innerName: data.name }
        })
      })
  }



  changeName() {
    this.setState({
      id : 2
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).
      then(res => res.json()).
      then(data => {
        console.log(data)
        this.setState({
          name: { ...this.state.name, innerName: data.name }
        })
      })
  }



  render() {
    console.log("After Constructor")

    return (
      <div className="App">
        <h1 style={nameStyle}>{`Hello this is : ${this.state.name.innerName}`}</h1>
        <button onClick={() => this.changeName()}> Change Name</button>
      </div>
    );
  }
}


const nameStyle = {
  fontSize: 50,
}

export default App;

