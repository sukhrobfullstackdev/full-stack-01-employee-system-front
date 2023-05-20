import React from 'react';
import {Link} from "react-router-dom";

const Employee = ({id, firstName, lastName, email, deleteEmployee}) => {
    return (
        <tr>
            <td className={"text-left whitespace-nowrap text-sm text-gray-500 py-4 px-6"}>{id}</td>
            <td className={"text-left whitespace-nowrap text-sm text-gray-500 py-4 px-6"}>{firstName}</td>
            <td className={"text-left whitespace-nowrap text-sm text-gray-500 py-4 px-6"}>{lastName}</td>
            <td className={"text-left whitespace-nowrap text-sm text-gray-500 py-4 px-6"}>{email}</td>
            <td className={"text-right whitespace-nowrap text-sm text-gray-500 py-4 px-6"}>
                <button
                    className={"bg-red-400 rounded py-1 px-5 text-white font-normal text-sm transition mr-2 hover:bg-red-500"}
                    onClick={(e) => deleteEmployee(e, id)}
                >Delete
                </button>
                <button
                        className={"bg-yellow-400 rounded py-1 px-5 text-white cursor-pointer transition hover:bg-yellow-500"}><Link to={`/updateEmployee/${id}`}>Edit</Link>
                </button>
            </td>
        </tr>
    );
};

export default Employee;