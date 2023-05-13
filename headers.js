import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './Navbar';
import {FaShopify}from "react-icons/fa"
import {BiHomeSmile} from "react-icons/bi"
import {SiAboutdotme} from "react-icons/si"
import {RiProductHuntLine} from "react-icons/ri"
import {AiFillContacts,AiOutlineTeam} from "react-icons/ai"
import {BsFillCartPlusFill} from "react-icons/bs"

const Headers = () => {
return (
	<>
	<Nav>
	<b style ={{ color:"white",fontSize:"50px",padding:"20px 100px 0 0 "}}> <FaShopify/></b>
		<Bars />
		<NavMenu>
		<NavLink to='/' >
			<BiHomeSmile/>
			
		</NavLink>
		<NavLink to='/about'>
			<SiAboutdotme/>
	
		</NavLink>
		<NavLink to='/Products'>
		<RiProductHuntLine/>
		</NavLink>
		<NavLink to='/Contact'>
			<AiFillContacts/>
		</NavLink>
		<NavLink to='/team'>
			<AiOutlineTeam/>
		</NavLink>
		<NavLink to='Cart' >
		<BsFillCartPlusFill/>
		</NavLink>
		<NavLink to='/Signup' >
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Signin' >Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Headers;
