import React from "react";
// import TableData from "../components/TableData";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Table(props) {
    return (
        // <ul className="list-group">
        //   {props.employees.map(item => (
        //     <li className="list-group-item" key={item.id}>
        //       {item.picture} {item.first}{item.last} {item.phone}{item.email} {item.dob}
        //     </li>
        //   ))}
        // </ul>

        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
              
                    {props.employees.map(item => (
                        <tr>
                          
                            <td><img alt={item.image} src={item.picture}/></td>
                            <td>{item.first}</td>
                            <td>{item.last}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.dob}</td>
                        </tr>
                    ))}

               
            </tbody>
        </table>

    );
}

export default Table;