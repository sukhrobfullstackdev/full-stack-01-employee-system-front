import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee"

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/add", employee);
    }

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getEmployee(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + `/${id}`);
    }

    editEmployee(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + `/edit/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + `/delete/${id}`);
    }
}

export default new EmployeeService();