import React from 'react';
import Headerbar from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import { Button, Nav, Tab } from 'react-bootstrap';
import TableApply from './components/tableApply';
import { ReactSVG } from 'react-svg';
import TotalCandidatesIcon from '../../assets/svg/Total_Candidates.svg';
import AcceptedCandidatesIcon from '../../assets/svg/Accepted_Candidates.svg';
import RejectedCandidatesIcon from '../../assets/svg/Rejected_Candidates.svg';

const CandidatesComponent = () => {
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
                                        <h1>Candidates</h1>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Total Candidates</p>
                                                            <h3>230</h3>
                                                        </div>
                                                        <ReactSVG src={TotalCandidatesIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Accepted Candidate</p>
                                                            <h3>230</h3>
                                                        </div>
                                                        <ReactSVG src={AcceptedCandidatesIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-card-summary p-1'>
                                                        <div>
                                                            <p>Rejected Candidate</p>
                                                            <h3>230</h3>
                                                        </div>
                                                        <ReactSVG src={RejectedCandidatesIcon} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card bhr-card'>
                                        <div className='card-body p-4'>
                                            <Tab.Container defaultActiveKey="apply">
                                                <div className='d-flex align-items-center justify-content-between mb-4'>
                                                    <Nav variant="pills" fill={false} className="bhr-nav-pills-default">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="apply">
                                                                Candidate Apply
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="hr">
                                                                Interview HR
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="user">
                                                                Interview User
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="test">
                                                                Online Test
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Button variant='light' className='bhr-btn-light'>Set Recruitment Step</Button>
                                                </div>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="apply">
                                                        <TableApply />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="hr">
                                                        <TableApply />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="user">
                                                        <TableApply />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="test">
                                                        <TableApply />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
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

export default CandidatesComponent;