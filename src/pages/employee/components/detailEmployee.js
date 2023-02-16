import React, { useState } from 'react';
import Headerbar from '../../../components/layout/header';
import Sidebar from '../../../components/layout/sidebar';
import EmployeePic from '../../../assets/img/employee.png';
import { ReactSVG } from 'react-svg';
import UserMenuIcon from '../../../assets/svg/User_Menu.svg';
import TimeManagementIcon from '../../../assets/svg/Time_Management.svg';
import PayrollMenuIcon from '../../../assets/svg/Payroll_Menu.svg';
import TrainingMenuIcon from '../../../assets/svg/Training_Menu.svg';
import KPIMenuIcon from '../../../assets/svg/KPI_Menu.svg';
import { Button, Collapse, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ContentPersonal from './contentPersonal';

function DetailEmployeeComponent() {
    const [generalMenu, setGeneralMenu] = useState(false);
    const [timeManagementMenu, setTimeManagementMenu] = useState(false);

    return (
        <section className='bhr-dashboard'>
            <div className='h-100'>
                <div className='bhr-dashboard-container'>
                    <Sidebar />
                    <div className='bhr-dashboard-container-content' style={{ width: "100%", paddingLeft: "17%" }}>
                        <Headerbar />
                        <div className='d-flex bg-default'>
                            <div className='bhr-sidetab bhr-sidetab-green' style={{ width: "25%" }}>
                                <div className='bhr-sidetab-profile'>
                                    <img src={EmployeePic} alt="Employee" />
                                </div>
                                <div className='bhr-sidetab-detail'>
                                    <h4>Ralph Edward</h4>
                                    <h5>UX Designer</h5>
                                </div>
                                <hr />
                                <div className='bhr-sidetab-list'>
                                    <ul>
                                        <li>
                                            <Button
                                                onClick={() => setGeneralMenu(!generalMenu)}
                                                aria-expanded={generalMenu}
                                                className={`${generalMenu ? "bhr-open" : ""}`}
                                            >
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='bhr-sidetab-list-menu'>
                                                        <ReactSVG src={UserMenuIcon} className="bhr-left-icon" />
                                                        General
                                                    </div>
                                                    <KeyboardArrowRightRoundedIcon className='bhr-arrow' />
                                                </div>
                                            </Button>
                                            <Collapse in={generalMenu}>
                                                <div className='bhr-sidetab-list-content'>
                                                    <Link to={"#"} className="active">Personal</Link>
                                                    <Link to={"#"}>Employement</Link>
                                                </div>
                                            </Collapse>
                                        </li>
                                        <li>
                                            <Button
                                                onClick={() => setTimeManagementMenu(!timeManagementMenu)}
                                                aria-expanded={timeManagementMenu}
                                                className={`${timeManagementMenu ? "bhr-open" : ""}`}
                                            >
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='bhr-sidetab-list-menu'>
                                                        <ReactSVG src={TimeManagementIcon} className="bhr-left-icon" />
                                                        Time Management
                                                    </div>
                                                    <KeyboardArrowRightRoundedIcon className='bhr-arrow' />
                                                </div>
                                            </Button>
                                            <Collapse in={timeManagementMenu}>
                                                <div className='bhr-sidetab-list-content'>
                                                    <Link to={"#"} className="active">Attendance</Link>
                                                    <Link to={"#"}>Leave</Link>
                                                    <Link to={"#"}>Overtime</Link>
                                                    <Link to={"#"}>Salary Advance</Link>
                                                    <Link to={"#"}>Reimburse</Link>
                                                </div>
                                            </Collapse>
                                        </li>
                                        <li>
                                            <Button>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='bhr-sidetab-list-menu'>
                                                        <ReactSVG src={PayrollMenuIcon} className="bhr-left-icon" />
                                                        Payroll
                                                    </div>
                                                </div>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='bhr-sidetab-list-menu'>
                                                        <ReactSVG src={TrainingMenuIcon} className="bhr-left-icon" />
                                                        Training
                                                    </div>
                                                </div>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='bhr-sidetab-list-menu'>
                                                        <ReactSVG src={KPIMenuIcon} className="bhr-left-icon" />
                                                        KPI
                                                    </div>
                                                </div>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='bhr-sidecontent' style={{ width: "75%" }}>
                                <h2>Personal Info</h2>
                                <Tab.Container defaultActiveKey="personal">
                                    <Nav variant="pills" fill={false} className="bhr-nav-pills-default">
                                        <Nav.Item>
                                            <Nav.Link eventKey="personal">
                                                Personal Data
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="family">
                                                Family
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="education">
                                                Education
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="experience">
                                                Experience
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="emergency">
                                                Emergency Contact
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="personal">
                                            <ContentPersonal />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="family">
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="education">
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="experience">
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="emergency">
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailEmployeeComponent