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

function TableReimburse() {
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
                            <h1 className='bhr-title'>Reimburse</h1>
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
                                        <TableCell>Reimburse Type</TableCell>
                                        <TableCell>Request Time</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[...Array(5)].map((row, index) => {
                                        if (index === 0) {
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
                                                <TableCell>Medical Reimbursement</TableCell>
                                                <TableCell>10 Februari 2023 10:30</TableCell>
                                                <TableCell>Rp. 300.000</TableCell>
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
                                        else if (index === 1) {
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
                                                <TableCell>Medical Reimbursement</TableCell>
                                                <TableCell>10 Februari 2023 10:30</TableCell>
                                                <TableCell>Rp. 300.000</TableCell>
                                                <TableCell>
                                                    <div className='bhr-status-field bhr-status-label-danger'>
                                                        <span className='fw-bold'>Reject</span>
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
                                                <TableCell>Medical Reimbursement</TableCell>
                                                <TableCell>10 Februari 2023 10:30</TableCell>
                                                <TableCell>Rp. 300.000</TableCell>
                                                <TableCell>
                                                    <div className='bhr-status-field bhr-status-label-muted'>
                                                        <span className='fw-bold'>Pending</span>
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
                    <h4>Detail Overtime</h4>
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
                </div>
                <h5>Data Request Overtime</h5>
                <div className='bhr-modal-list mb-4'>
                    <div className='w-100 mb-1'>
                        <label>Date Overtime</label>
                        <span>: 14 Februari 2023</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Overtime Type</label>
                        <span>: Before Shift</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Duration</label>
                        <span>: 4 Hours</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Paid Overtime</label>
                        <span>: <span className='fw-bold text-success'>+20.000</span></span>
                    </div>
                    <div className='w-100 d-flex align-items-center mb-1'>
                        <label>Status</label>
                        <span>:&nbsp;</span>
                        <div className='bhr-status-field bhr-status-label-info'>
                            <span>Approve</span>
                        </div>
                    </div>
                </div>
                <h6>Keterangan Overtime</h6>
                <p>Melakukan research mengenai perhitungan PPH21 yang terbaru dan juga meresearch penggajian karyawan menurut undang-undang ketenaga kerjaan</p>
            </Modal.Body>
        </Modal>
    );
}

export default TableReimburse