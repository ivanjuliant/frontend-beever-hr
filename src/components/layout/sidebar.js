import React from 'react';
import EmployeeIcon from '../../assets/svg/Employee.svg';
import PayrollIcon from '../../assets/svg/Payroll.svg';
import TrainingIcon from '../../assets/svg/Training.svg';
import JobPostingIcon from '../../assets/svg/JobPosting.svg';
import CandidatesIcon from '../../assets/svg/Candidates.svg';
import DashboardIcon from '../../assets/svg/Dashboard.svg';
import CalendarIcon from '../../assets/svg/Calendar.svg';
import KPIIcon from '../../assets/svg/KPI.svg';
import LogoutIcon from '../../assets/svg/Logout.svg';
import BeeverLogo from '../../assets/img/beever.png';
import { Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

function Sidebar() {
    const router = useLocation();
    const split = router.pathname.split("/");
    const pathname = split.length === 1 ? "/" + split['1'] : "/" + split['1'];
    const location = pathname;

    return (
        <div className='bhr-sidebar' style={{ width: "17%" }}>
            <div className='bhr-sidebar-top'>
                <img src={BeeverLogo} alt={"Beever HR"} width={"150"} />
            </div>
            <div className='bhr-sidebar-center'>
                <ul>
                    <li className={location === "/" ? "active" : ""}>
                        <Link to={"/"}>
                            <ReactSVG src={DashboardIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className={location === "/calendar" ? "active" : ""}>
                        <Link to={"/calendar"}>
                            <ReactSVG src={CalendarIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Calendar</p>
                        </Link>
                    </li>
                    <p className='bhr-sidebar-center-label'>RECRUITMENT</p>
                    <li className={location === "/candidates" ? "active" : ""}>
                        <Link to={"/candidates"}>
                            <ReactSVG src={CandidatesIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Candidates</p>
                        </Link>
                    </li>
                    <li className={location === "/job-posting" ? "active" : ""}>
                        <Link to={"/job-posting"}>
                            <ReactSVG src={JobPostingIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Job Posting</p>
                        </Link>
                    </li>
                    <p className='bhr-sidebar-center-label'>EMPLOYEE</p>
                    <li className={location === "/employee" ? "active" : ""}>
                        <Link to={"/employee"}>
                            <ReactSVG src={EmployeeIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Employee</p>
                        </Link>
                    </li>
                    <li className={location === "/payroll" ? "active" : ""}>
                        <Link to={"/payroll"}>
                            <ReactSVG src={PayrollIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Payroll</p>
                        </Link>
                    </li>
                    <li className={location === "/training" ? "active" : ""}>
                        <Link to={"/training"}>
                            <ReactSVG src={TrainingIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Training</p>
                        </Link>
                    </li>
                    <li className={location === "/kpi" ? "active" : ""}>
                        <Link to={"/kpi"}>
                            <ReactSVG src={KPIIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>KPI</p>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className='except'>
                        <Link to={"/logout"}>
                            <ReactSVG src={LogoutIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" />
                            <p>Logout</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar