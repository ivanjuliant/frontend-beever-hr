import { FormControl, InputAdornment, MenuItem, OutlinedInput, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import UserPicture from '../../../assets/img/user.png';
import FilterIcon from '../../../assets/svg/FilterTable.svg';
import PlusIcon from '../../../assets/svg/Plus.svg';
import DownloadIcon from '../../../assets/svg/Download.svg';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

function TableAttandance() {
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState(10);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handlePagination = (event) => {
        setPagination(event.target.value);
    };

    return (
        <div className='bhr-dashboard-container-content-left-recent'>
            <div className='w-100 d-flex align-items-center justify-content-between'>
                <div className='bhr-recent-left' style={{ width: "40%" }}>
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
                </div>
                <div className='bhr-recent-right'>
                    <div className='w-100 d-flex align-items-center justify-content-end'>
                        <Button className='bhr-btn-filter me-2'>
                            <ReactSVG src={FilterIcon} />
                        </Button>
                        <Button className='bhr-btn-primary-icon me-2'><ReactSVG src={PlusIcon} /> Add Candidate</Button>
                        <Button className='bhr-btn-primary-icon'><ReactSVG src={DownloadIcon} /> Download</Button>
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
                <div className='bhr-table-custom-pagination ps-4 pe-4 pt-3 pb-3'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='w-100 h-100 d-flex align-items-center justify-content-start'>
                                <p className='mb-0'>1-10 of 195 items</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='w-100 h-100 d-flex align-items-center justify-content-end'>
                                <Pagination className='bhr-pagination' count={10} />
                                <FormControl sx={{ m: 1, minWidth: 70 }}>
                                    <Select
                                        value={pagination}
                                        onChange={handlePagination}
                                        className={"bhr-select-control"}
                                        IconComponent={UnfoldMoreRoundedIcon}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={25}>25</MenuItem>
                                        <MenuItem value={50}>50</MenuItem>
                                        <MenuItem value={100}>100</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAttandance