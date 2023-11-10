// components/Navbar/index.js
import logo from "./../../assets/img/marcie.jpeg";
import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateTicket from "../newTicket/createTicket";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
} from "./../NavbarElements";

const Navbar = () => {
	// const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		const newTab = window.open('', '_blank');
		newTab.location.href = '/CreateTicketPage'; // Replace with the actual URL of your CreateTicketPage
	  };
		
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
                <img src={logo} alt="Bootstrap" width="100"/>
					<NavLink to="/main" >
						Main
					</NavLink>
					<NavLink to="/about" >
						About
					</NavLink>
					{/* <button onClick={toggleForm}>New Ticket</button> */}
        			
					{/* <button onClick={handleClick}>New Ticket</button> */}
					<NavBtn>
						{/* <NavBtnLink onClick={toggleForm}>New Ticket</NavBtnLink> */}
						{/* <Link to="/create">New Ticket</Link> */}
					</NavBtn>
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
