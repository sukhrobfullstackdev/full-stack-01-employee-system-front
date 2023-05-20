import React, {useState} from 'react';
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    const save = async (e) => {
        e.preventDefault();
        try {
            const response = await EmployeeService.saveEmployee({firstName, lastName, email});
            alert(response.data.message);
            reset();
        } catch (e) {
            alert(e.response.data.message);
        };
    }
    return (
        <div className={"flex max-w-2xl mx-auto shadow border-b justify-center"}>
            <div className={"px-8 py-8"}>
                <div className={"font-thin text-2xl tracking-wider"}>
                    <h1>Add a new employee</h1>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"firstName"} className={"block text-gray-600 text-sm font-normal"}>First
                        Name: </label>
                    <input placeholder={"Please enter your first name!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"text"}
                           name={"firstName"} id={"firstName"} value={firstName} onChange={(e) => changeFirstName(e)}/>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"lastName"} className={"block text-gray-600 text-sm font-normal"}>Last
                        Name: </label>
                    <input placeholder={"Please enter your last name!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"text"}
                           name={"lastName"} id={"lastName"} value={lastName} onChange={(e) => changeLastName(e)}/>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"email"} className={"block text-gray-600 text-sm font-normal"}>Email: </label>
                    <input placeholder={"Please enter your email!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"email"}
                           name={"email"} id={"email"} value={email} onChange={(e) => changeEmail(e)}/>
                </div>
                <div className={"items-center flex justify-around h-14 w-full my-4"}>
                    <button
                        className={"rounded text-white font-semibold bg-gray-400 py-2 px-6 hover:bg-gray-700 transition"}
                        onClick={save}
                    >Save
                    </button>
                    <button
                        className={"rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700 transition"} onClick={reset}>Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export {AddEmployee};