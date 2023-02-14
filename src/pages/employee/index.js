import React from 'react';
import Headerbar from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import TableEmployee from './components/tableEmployee';
import { ReactSVG } from 'react-svg';
import TotalEmployeeIcon from '../../assets/svg/Total_Employee.svg';
import NewEmployeeIcon from '../../assets/svg/New_Employee.svg';
import ResignedEmployeeIcon from '../../assets/svg/Resigned_Employee.svg';
import JobAppliedIcon from '../../assets/svg/Job_Applied.svg';

const EmployeeComponent = () => {
    return (
        <section className='bhr-dashboard'>
            <div className='h-100'>
                <div className='bhr-dashboard-container'>
                    <Sidebar />
                    <div className='bhr-dashboard-container-content' style={{ width: "100%", paddingLeft: "17%" }}>
                        <Headerbar />
                        <div className='row h-100 m-0'>
                            <div className='col-12 col-md-12 bg-default'>
                                <div className='bhr-dashboard-container-content-left'>
                                    <div className='bhr-dashboard-container-content-left-title'>
                                        <h1>Employee</h1>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-12 col-md-3'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Total Employees</p>
                                                            <h3>3.245</h3>
                                                        </div>
                                                        <ReactSVG src={TotalEmployeeIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>New Employees</p>
                                                            <h3>500</h3>
                                                        </div>
                                                        <ReactSVG src={NewEmployeeIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Resigned Employees</p>
                                                            <h3>200</h3>
                                                        </div>
                                                        <ReactSVG src={ResignedEmployeeIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Job Applied</p>
                                                            <h3>3.245</h3>
                                                        </div>
                                                        <ReactSVG src={JobAppliedIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card bhr-card'>
                                        <div className='card-body p-4'>
                                            <TableEmployee />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default EmployeeComponent;