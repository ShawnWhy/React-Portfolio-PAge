import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";

const ContactPage = function(){
    const[message, setMessage]=useState
    ({
        username:"",
        email:"",
        message:"",


    })
const [alert, setAlert]=useState("");
    
   

const handleChange= function(event){
    
    const {name, value}=event.target;
    console.log(name);
    console.log(value);
    setMessage({...message, [name]:value})
}


const handleSubmit = function(event){
    event.stopPropagation();
    event.preventDefault();
    if(!message.username){
        setAlert("please enter name")
        setTimeout(() => {
            setAlert("")
            
        }, 1000);
    }
    else if(!message.message){
        
        setAlert("please enter message")
        setTimeout(() => {
            setAlert("")
            
        }, 1000);
    }
    else if(!message.message&&!message.username){
        setAlert("please enter name and message")
        setTimeout(() => {
            setAlert("")
            
        }, 1000);
    }

    else{

        axios.post("/api/messages",message,
    )
    .then((data)=>{setAlert("thank you!")
    setTimeout(() => {
        setAlert("")
        
    }, 1000);
})

}

}


    return(
<div className="container">
<form className ="col-md-6">
<input className="nameInput" type = "text" name="username" placeholder="name" onChange={handleChange}></input>
<input className="emailInput" type="email" name="email" placeholder="email" onChange={handleChange}></input>
<textarea name="message" onChange={handleChange} placeholder="message"></textarea>
<input onClick={handleSubmit} type="submit"></input>
<div className="alert">{alert}</div>

</form>


<address>
    <a ></a>



</address>

</div>




    )
}

export default ContactPage