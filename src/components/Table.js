import React from "react";

function Table(props) {
 
    return (

        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col"> 
                        Last Name
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>

                {props.employees.map(item => (
                    <tr>

                        <td><img alt={item.picture.thumbnail} src={item.picture.thumbnail} /></td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.phone}</td>
                        <td><a href={"mailto:" + item.email}>{item.email}</a></td>
                    </tr>
                ))}


            </tbody>
        </table>

    );
}

export default Table;