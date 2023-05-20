import React from 'react';
import {AddEmployee, Employees, Navbar, UpdateEmployee} from "./components";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Employees />} />
                <Route path="/" element={<Employees />}/>
                <Route path="/employees" element={<Employees />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;