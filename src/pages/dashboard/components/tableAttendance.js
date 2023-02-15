import { FormControl, IconButton, InputAdornment, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import UserPicture from '../../../assets/img/user.png';
import FilterIcon from '../../../assets/svg/FilterTable.svg';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function TableAttandance() {
    const [search, setSearch] = useState('');
    const [modalShow, setModalShow] = React.useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className='bhr-dashboard-container-content-left-recent'>
            <div className='card bhr-card'>
                <div className='card-body p-4'>
                    <div className='w-100 d-flex align-items-center justify-content-between'>
                        <div className='bhr-recent-left'>
                            <h1 className='bhr-title'>Attandance</h1>
                            <p>{moment().format("DD MMMM YYYY")}</p>
                        </div>
                        <div className='bhr-recent-right'>
                            <Link to={"/repayment"} className="bhr-link">
                                View All
                            </Link>
                            <div className='w-100 d-flex align-items-center justify-content-end'>
                                <FormControl variant="outlined" fullWidth>
                                    <OutlinedInput
                                        value={search}
                                        onChange={handleSearch}
                                        className="bhr-form-search me-2"
                                        placeholder={"Search Data"}
                                        startAdornment={
                                            <InputAdornment position="end">
                                                <SearchRoundedIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Button className='bhr-btn-filter'>
                                    <ReactSVG src={FilterIcon} className="me-2" /> Filter
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='bhr-table'>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Kode Employee</TableCell>
                                        <TableCell>Shift</TableCell>
                                        <TableCell>Attendance Type</TableCell>
                                        <TableCell>Clock In</TableCell>
                                        <TableCell>Clock Out</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell align='center'>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[...Array(5)].map((row, index) => {
                                        if (index < 3) {
                                            return <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell width={"17%"}>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='bhr-title-picture'>
                                                            <img src={UserPicture} alt="User" />
                                                        </div>
                                                        <p className='mb-0'>Ralph Edwards</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>B0014</TableCell>
                                                <TableCell>10 Februari 2023</TableCell>
                                                <TableCell>11 Februari 2023</TableCell>
                                                <TableCell>1 hari</TableCell>
                                                <TableCell>Cuti Pendidikan</TableCell>
                                                <TableCell>
                                                    <div className='bhr-status-field bhr-status-label-info'>
                                                        <span className='fw-bold'>Approve</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Button variant='primary' className='bhr-btn-table-primary' onClick={() => setModalShow(true)}>Detail</Button>
                                                </TableCell>
                                            </TableRow>
                                        }
                                        else {
                                            return <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell width={"17%"}>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='bhr-title-picture'>
                                                            <img src={UserPicture} alt="User" />
                                                        </div>
                                                        <p className='mb-0'>Ralph Edwards</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>B0014</TableCell>
                                                <TableCell>10 Februari 2023</TableCell>
                                                <TableCell>11 Februari 2023</TableCell>
                                                <TableCell>1 hari</TableCell>
                                                <TableCell>Cuti Pendidikan</TableCell>
                                                <TableCell>
                                                    <div className='bhr-status-field bhr-status-label-danger'>
                                                        <span className='fw-bold'>Terlambat</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Button variant='primary' className='bhr-btn-table-primary' onClick={() => setModalShow(true)}>Detail</Button>
                                                </TableCell>
                                            </TableRow>
                                        }
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='bhr-modal'>
                <div className='bhr-modal-title mb-3'>
                    <h4>Detail Attendance</h4>
                    <IconButton onClick={props.onHide}>
                        <CloseRoundedIcon />
                    </IconButton>
                </div>
                <h5>Data Employee</h5>
                <div className='bhr-modal-list mb-4'>
                    <div className='w-100 mb-1'>
                        <label>Name</label>
                        <span>: Raplh Edward</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Kode Employee</label>
                        <span>: B0014</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Organization</label>
                        <span>: IT Service</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Job Position</label>
                        <span>: UX Research</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Shift</label>
                        <span>: WFH (Work From Home)</span>
                    </div>
                </div>
                <h5>Data Attendance</h5>
                <div className='bhr-modal-list mb-4'>
                    <div className='w-100 mb-1'>
                        <label>Attendance Type</label>
                        <span>: Live Attendance</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Clock In</label>
                        <span>: 08:40 AM</span>
                        <Link to={"/"} target="_blank">Lihat Foto</Link>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Clock Out</label>
                        <span>: 17:00 PM</span>
                        <Link to={"/"} target="_blank">Lihat Foto</Link>
                    </div>
                    <div className='w-100 d-flex align-items-center mb-1'>
                        <label>Status</label>
                        <span>:&nbsp;</span>
                        <div className='bhr-status-field bhr-status-label-info'>
                            <span>Approve</span>
                        </div>
                    </div>
                </div>
                <h6>Location</h6>
                <p>GoWork Plaza Indonesia, Level 5 Unit E021AB, Jl. M.H. Thamrin No.Kav. 28-30, Daerah Khusus Ibukota Jakarta 10350</p>
            </Modal.Body>
        </Modal>
    );
}


export default TableAttandance