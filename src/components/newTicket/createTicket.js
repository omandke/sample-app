import React, { useState } from "react";
import "./createButton.css"

const CreateTicket = () =>{
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/postData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: subject,
                    description: description,
                }),
            });

            // Check for errors
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // The response if successful 
            const data = await response.json();
            console.log(data);
            console.log("Data has been sent!!!");

        } catch (error) {
            console.error("Error:", error);
        }
    }

   return(
    <div className="container">
    <h2>Issue Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter subject" value={subject} onChange={e => setSubject(e.target.value)} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="5" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
   ) 
};

export default CreateTicket;