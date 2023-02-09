import { Route, Routes } from "react-router-dom";
import DashboardComponent from "./components/partials/dashboard";

function App() {
    return (
        <div className="bhr-app">
            <Routes>
                <Route exact path="/" element={<DashboardComponent />} />
            </Routes>
        </div>
    );
}

export default App;
