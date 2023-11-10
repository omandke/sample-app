import React from "react";
import "./ticket-table.css"
import { useEffect, useState } from 'react';
import CreateTicket from "../newTicket/createTicket";
const TicketTable = () => {

    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,] = useState(25);
    const url = 'http://localhost:3001/api/getData'; // Replace with your server's URL

// Make a fetch request to your server
useEffect(() => {
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    setData(data);
    console.log(data);
    // console.log(data.tickets[0].status);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
}, []);

  

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItemData = (data.tickets && data.tickets.length > 0) ?  data.tickets.slice(indexOfFirstItem, indexOfLastItem) : [];

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div className="container">
        <h2>Tickets</h2>
        <div style={{ textAlign: 'right' }}>
          <button onClick={toggleForm}>New Ticket</button>
      </div>
        {showForm && <CreateTicket />}
        <table className="table">
        <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">ID</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Requester</th>
                    <th scope="col">Requested</th>
                    <th scope="col">Group</th>
                </tr>
            </thead>
            <tbody>
            {currentItemData.map((ticket) => (
                  <tr key={ticket.id}>
                  <td>{ticket.status}</td>
                  <td>{ticket.id}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.requester_id}</td>
                  <td>{ticket.created_at}</td>
                  <td>{ticket.type}</td>
                  </tr>
                ))}
            </tbody>
        </table>
        <div>
                {
                  (data.tickets) &&
                  Array(Math.ceil(data.tickets.length / itemsPerPage)).fill().map((_, index) => (
                    <button key={index+1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
    </div>
    );
}

export default TicketTable;