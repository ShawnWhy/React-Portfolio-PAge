import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import mailicon from "./mailicon.svg"

const ContactPage = function(){

//the mesage to be sent
const[message, setMessage]=useState
    ({
        username:"",
        email:"",
        message:"",
    })

//sets the error messages and thank you message
const [alert, setAlert]=useState("");
    
   
//changes the information to be submitted
const handleChange= function(event){
    const {name, value}=event.target;
    // console.log(name);
    // console.log(value);
    setMessage({...message, [name]:value})
    }

//submits the information to the database
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

    //if no errors, send the message to database
    else{
    axios.post("/api/messages",message,)
    .then((data)=>{setAlert("thank you!")
    //thank the user
    setTimeout(() => {
        setAlert("")
         }, 1000);
        })
    }
}

//inform the user that its a email link
const setEmailMessage = function(){
    setAlert("email")
    setTimeout(()=>{
        setAlert("")}
        ,1000);
}






    return(
<div className="container">
<form className ="col-md-6">
<input className="nameInput" type = "text" name="username" placeholder="name" onChange={handleChange}></input>
<input className="emailInput" type="email" name="email" placeholder="email" onChange={handleChange}></input>
<textarea name="message" onChange={handleChange} placeholder="message"></textarea>
<input onClick={handleSubmit} type="submit"></input>
<a  href="mailto:shawnyudesign@gmail.com"><img src={mailicon} onMouseOver={setEmailMessage}></img></a>

<div className="alert">{alert}</div>
</form>

</div>
)
}

export default ContactPage