import React from 'react'
import {FaShopify}from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
	<>
    <div>
    <div style={mystyle}>
      <h2> Welcome to </h2>
      <b style ={{ color:"black",fontSize:"100px",padding:"2px 1px 0 0 "}}> <FaShopify/></b>
      <h3 > Unbeatable products and Unbeatable Price</h3>
    </div>
	<div style={{textAlign:"center"}} >
	  <NavLink to= "/Products">
	  <button style={Button}>
  		Disabled Button
	  </button>
	  </NavLink>
	</div>
	
	  </div>
	
   
	</>
  )
};
const Button = {
	backgroundColor: "black",
	color: "white",
	fontSize: "20px",
	padding: "10px 60px",
	borderRadius: "5px",
	margin: "10px 5px",
	textAlign:" center",
	cursor: "pointer"

}


const mystyle = {
	alignItem :"center",
textAlign: "center",
// marginLeft: "60px",

}



export default Services
