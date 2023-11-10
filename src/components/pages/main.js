import React from "react";
import { Table } from "react-bootstrap";

const Main = () => {
	return (
		<Table striped>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Summary</th>
                    <th>Status</th>
                    <th>Creation Date</th>
                </tr>
            </thread>
        </Table>
	);
};

export default Main;
