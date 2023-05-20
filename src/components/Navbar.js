import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"bg-gray-800"}>
            <div className={"h-16 px-8 flex items-center justify-between"}>
                <p className={"text-white font-bold"}>Employee Management System</p>
                <div className={""}>
                    <NavLink to={"/employees"} className="text-base transition text-gray-300 font-medium hover:text-white mx-2">
                        Employees
                    </NavLink>
                    <NavLink to={"/addEmployee"} className="text-base transition text-gray-300 font-medium hover:text-white mx-2">
                        Adding New Employee
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export {Navbar};