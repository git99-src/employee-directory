import React from "react";
function TableData(props) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{item.picture}</td>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.dob}</td>
        </tr>
    )
}

export default TableData;