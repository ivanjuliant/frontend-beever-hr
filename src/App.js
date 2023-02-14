import { Route, Routes } from "react-router-dom";
import DashboardComponent from "./pages/dashboard";
import CalendarComponent from "./pages/calendar";
import CandidatesComponent from "./pages/candidates";
import EmployeeComponent from "./pages/employee";

function App() {
    return (
        <div className="bhr-app">
            <Routes>
                <Route exact path="/" element={<DashboardComponent />} />
                <Route path="/calendar" element={<CalendarComponent />} />
                <Route path="/candidates" element={<CandidatesComponent />} />
                <Route path="/employee" element={<EmployeeComponent />} />
            </Routes>
        </div>
    );
}

export default App;