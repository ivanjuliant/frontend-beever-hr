import { FormControl, InputAdornment, MenuItem, OutlinedInput, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import UserPicture from '../../../assets/img/user.png';
import FilterIcon from '../../../assets/svg/FilterTable.svg';
import PlusIcon from '../../../assets/svg/Plus.svg';
import DownloadIcon from '../../../assets/svg/Download.svg';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

function TableEmployee() {
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
                                <TableCell>Employee Name</TableCell>
                                <TableCell>ID Employee</TableCell>
                                <TableCell>Organization</TableCell>
                                <TableCell>Job Position</TableCell>
                                <TableCell>Job Level</TableCell>
                                <TableCell>Employement Status</TableCell>
                                <TableCell>Join Date</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...Array(10)].map((row, index) => {
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
                                        <TableCell>IT Service</TableCell>
                                        <TableCell>UX Designer</TableCell>
                                        <TableCell>Manager</TableCell>
                                        <TableCell>
                                            <div className='bhr-status-field bhr-status-label-warning'>
                                                <div className='bg-label'></div>
                                                <span>Probation</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>06 Februari 2023</TableCell>
                                        <TableCell>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" className='bhr-btn-outline-primary'>
                                                    Action
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='bhr-dropdown-show'>
                                                    <Dropdown.Item href="#">Detail</Dropdown.Item>
                                                    <Dropdown.Item href="#">Transfer</Dropdown.Item>
                                                    <Dropdown.Item href="#">Resign</Dropdown.Item>
                                                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </TableCell>
                                    </TableRow>
                                } else if (index === 1) {
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
                                        <TableCell>IT Service</TableCell>
                                        <TableCell>UX Designer</TableCell>
                                        <TableCell>Manager</TableCell>
                                        <TableCell>
                                            <div className='bhr-status-field bhr-status-label-info'>
                                                <div className='bg-label'></div>
                                                <span>Contract</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>06 Februari 2023</TableCell>
                                        <TableCell>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" className='bhr-btn-outline-primary'>
                                                    Action
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='bhr-dropdown-show'>
                                                    <Dropdown.Item href="#">Detail</Dropdown.Item>
                                                    <Dropdown.Item href="#">Transfer</Dropdown.Item>
                                                    <Dropdown.Item href="#">Resign</Dropdown.Item>
                                                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </TableCell>
                                    </TableRow>
                                } else {
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
                                        <TableCell>IT Service</TableCell>
                                        <TableCell>UX Designer</TableCell>
                                        <TableCell>Manager</TableCell>
                                        <TableCell>
                                            <div className='bhr-status-field bhr-status-label-success'>
                                                <div className='bg-label'></div>
                                                <span>Intern</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>06 Februari 2023</TableCell>
                                        <TableCell>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" className='bhr-btn-outline-primary'>
                                                    Action
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className='bhr-dropdown-show'>
                                                    <Dropdown.Item href="#">Detail</Dropdown.Item>
                                                    <Dropdown.Item href="#">Transfer</Dropdown.Item>
                                                    <Dropdown.Item href="#">Resign</Dropdown.Item>
                                                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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
                                <p className='mb-0 bhr-pagination-total'>1-10 of 195 items</p>
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

export default TableEmployee