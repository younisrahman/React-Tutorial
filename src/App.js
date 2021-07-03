import './App.css';
import React from 'react';

// Next Clases :

// 1.State
// 2.Route

// 3.Lifecycle methods

// 4.Higher Order Components
// 5.Context API 


class Programmer extends React.Component {

    render(){
      console.log(this.props)
      return (
        <div>
          <h1 className="asu">{this.props.name}</h1>
          <h2>{this.props.role}</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet lab</h3>
        </div>
      )
    }
  }

class App extends React.Component {


  // Func1=(props)=>{
  //   return(
  //     <h1>
  //       Hello
  //     </h1>
  //   )
  // }
  
  render() {
    return (
      
      <div className="App">
        {/* {this.Func1(name="asu",role='DEv')} */}
        <Programmer name="Asu" role="Hacker" />
        <Programmer name="Younis" role="Mobile Developer" />
        <Programmer name="Naim" role="Web Developer" />
      </div>
    );
  }
}

export default App;






// class Programmer extends React.Component {
  
//   render(){
//     console.log(this.props)
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <h2>{this.props.role}</h2>
//         <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//           molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//           numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//           optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//           obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//           nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//           tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//           quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
//           sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//           recusandae alias error harum maxime adipisci amet lab</h3>
//       </div>
//     )
//   }
// }

// const Programmer = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.role}</h2>
//       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
//         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
//         optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
//         obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
//         nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//         tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
//         quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
//         sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
//         recusandae alias error harum maxime adipisci amet lab</h3>
//     </div>
//   )
// }
// const Funnc4 = () => (
//   <h1>
//     Hello
//   </h1>
// )

// const Func1 = () => {
//   let a = 5
//   let b = 5
//   let c = a + b

//   return (
//     <h1>{c}</h1>
//   )

// }
// class App extends React.Component {

//   // const todo = ['eat', 'code', 'sleep']

//   // const data = todo.map(item => {
//   //   return (
//   //     <h1>
//   //       {item}
//   //     </h1>
//   //   )
//   // })



//   render() {

//     return (
//       <div className="App">
//         {/* {this.Func1()} */}

//         < Func1 />

//         < Programmer name="Asu" role="Hacker" />
//         < Programmer name="Younis" role="Mobile Developer" />
//         < Programmer name="Naim" role="Web Developer" />
//         {/* <h1>
//           {todo.map((attribute, index) => (
//             <h1>{ index }</h1>
//           ))}
//         </h1> */}
//         {/* <h2>{todo.map(item => {
//           return (
//             <h1>
//               {item}
//             </h1>
//           )
//         })}</h2> */}
//       </div>
//     );
//   }

// }

// export default App;
