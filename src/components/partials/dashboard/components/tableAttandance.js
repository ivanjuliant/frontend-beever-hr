import { FormControl, InputAdornment, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import UserPicture from '../../../../assets/img/user.png';
import FilterIcon from '../../../../assets/svg/FilterTable.svg';

function TableAttandance() {
    const [search, setSearch] = useState('');

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
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Kode Employee</TableCell>
                                        <TableCell>Job Title</TableCell>
                                        <TableCell>Clock In</TableCell>
                                        <TableCell>Clock Out</TableCell>
                                        <TableCell>Range Waktu</TableCell>
                                        <TableCell>Deduction</TableCell>
                                        <TableCell align='center'>Status</TableCell>
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
                                                <TableCell>UX Designer</TableCell>
                                                <TableCell>08:40 AM</TableCell>
                                                <TableCell>17:00 PM</TableCell>
                                                <TableCell>12 Menit</TableCell>
                                                <TableCell className="text-danger">-Rp. 20.000</TableCell>
                                                <TableCell align='center'>
                                                    <span className="fw-600 bg-info bhr-badge">Tepat Waktu</span>
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
                                                <TableCell>UX Designer</TableCell>
                                                <TableCell>08:40 AM</TableCell>
                                                <TableCell>17:00 PM</TableCell>
                                                <TableCell>12 Menit</TableCell>
                                                <TableCell className="text-danger">-Rp. 20.000</TableCell>
                                                <TableCell align='center'>
                                                    <span className="fw-600 bg-danger bhr-badge">Terlambat</span>
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

export default TableAttandance