import React ,{useState,useEffect} from "react"
import randomColor from "randomcolor";
import './App.css';
import Count from "./count"
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
     {contact.firstName} {contact.lastName}</h2>
     )


  const [color,setColor]=useState("")

  useEffect(()=>{
        setColor(randomColor())
  },[setContactData])
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
      <h1 style={{color:color}}>{contacts}</h1>
      <Count />
    </>
  )
}

export default App;
