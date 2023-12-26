import React from 'react'
import { useState } from 'react';
// import "./signup.css"
import "./login-signup.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
function Signup() {
    let navigate = useNavigate("")
    const host = "https://backen-inotebook.onrender.com"
   const[credential,setcredentials] =  useState({email:"",password:"",name:""})
    const handelclick = async(e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"email":credential.email,"name":credential.name,"password":credential.password}),
          });
          const json = await response.json()
          // console.log(json)
          if (json.success){
            navigate("/login")
          }else{
            console.log(json)
          }
      }
      const onchange = (e) => {
        setcredentials({ ...credential, [e.target.name]: e.target.value })
      }
  return (
    <div className="registration signcontainer form">
      <header>Signup</header>
      <form action="#">
        <input  onChange={onchange} value={credential.name} name="name" id="name" type="text" placeholder="Enter your name"/>
        <input  onChange={onchange} value={credential.email} name="email" id="email" type="email"  placeholder="enter your email"/>
        <input  onChange={onchange} value={credential.password} name="password" id="password" type="password" placeholder="enter your password"/>
        <input type="button" onClick={handelclick} className="button" value="Signup"/>
      </form>
      <div className="signup">
        <span className="signup">already have an account? <Link className='loginbutton text-slate-900' to={"/login"}>login</Link>
        </span>
      </div></div>
    )

}


export default Signup
