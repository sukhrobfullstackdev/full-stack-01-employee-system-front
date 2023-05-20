import React, {useEffect, useState} from 'react';
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const res = await EmployeeService.getEmployees();
            setEmployees(res.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    const deleteEmployee = async (e, id) => {
        e.preventDefault();
        try {
            const res = await EmployeeService.deleteEmployee(id);
            if (res.status === 204) {
                alert("The employee has been successfully deleted!")
                setEmployees(prevState => prevState.filter(employee => employee.id !== id));
            }
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    if (loading) {
        return "Loading...!";
    }
    return (
        <div className={"container mx-auto"}>
            <div className={"flex shadow border m-5"}>
                <table className={"min-w-full"}>
                    <thead className={"bg-gray-100"}>
                    <tr>
                        <th className={"text-left font-medium text-gray-600 py-3 px-6 uppercase tracking-wider"}>Id</th>
                        <th className={"text-left font-medium text-gray-600 py-3 px-6 uppercase tracking-wider"}>First
                            Name
                        </th>
                        <th className={"text-left font-medium text-gray-600 py-3 px-6 uppercase tracking-wider"}>Last
                            Name
                        </th>
                        <th className={"text-left font-medium text-gray-600 py-3 px-6 uppercase tracking-wider"}>Email</th>
                        <th className={"text-right font-medium text-gray-600 py-3 px-6 uppercase tracking-wider"}>Actions</th>
                    </tr>
                    </thead>
                    <tbody className={"bg-white"}>
                    {employees.map(({id, firstName, lastName, email}) => (
                        <Employee key={id} id={id} deleteEmployee={deleteEmployee} firstName={firstName}
                                  lastName={lastName} email={email}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export {Employees};