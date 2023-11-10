import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import CreateTicket from "./components/newTicket/createTicket";
import About from "./components/pages/about";
//import Main from "./components/pages/main";
import TicketTable from "./components/table/ticket-table";


function App() {
	return (
		<div>
		<Router>
			<Navbar />
			<Routes>
				<Route path="/"/>
				<Route path="/about"  element={<About/>}/>
				<Route path="/create" component={<CreateTicket/>} />
				<Route path="/main"  element={<TicketTable/>}/>
			</Routes>
		</Router>
		{/* <CreateTicket/> */}
		{/* <TicketTable/> */}
		</div>
	);
}

export default App;

