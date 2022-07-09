import React ,{useState} from "react"
import './App.css';
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       answer:"Yes"
//     }
//   }
//   render(){
//     return (
//       <div className="App">
//        <h1>{`${this.state.answer}, Rakesh is doing good`}</h1>
//       </div>
//     );
//   }
// }
// converting above class component into functional component

function App(){
  const [inputData,setInputData]=useState(
    {
      firstName:"",
      lastName:""
    }
  )
  const [contactData,setContactData]=useState([])
  function handleChange(event){
    const {name,value}=event.target
    setInputData(previnputData=>(
     { ...previnputData,
      [name]:value}
    ))
    
  }
  console.log(inputData)
  function handleSubmit(event){
     event.preventDefault()
     setContactData(prevContactData=>[...prevContactData,inputData])
     
  }
  const contacts=contactData.map(contact=>
    <h2 key={contact.firstName + contact.lastName}>
     {contact.firstName} {contact.lastName}</h2>)
  return(
    <>
      <form>
         <input 
            placeholder="First Name"
            name="firstName"
            value={inputData.firstName}
            onChange={handleChange}
          />
          <input 
            placeholder="Last Name"
            name="lastName"
            value={inputData.lastName}
            onChange={handleChange}
          />
          <br/>
          <button onClick={handleSubmit} >Button</button>
      </form>
      {contacts}
    </>
  )
}

export default App;
