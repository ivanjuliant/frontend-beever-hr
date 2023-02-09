import { Button, FormControl, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import Link from 'next/link';

function createData(id, company_name, desc, amount) {
    return { id, company_name, desc, amount };
}

const rows = [
    createData('1', 'PT. Beever System Indonesia', 'Delayed Charge', 'Rp39,000,000'),
    createData('2', 'PT. Beever System Indonesia', 'Delayed Charge', 'Rp39,000,000'),
    createData('3', 'PT. Beever System Indonesia', 'Delayed Charge', 'Rp39,000,000'),
];

function ModalCalendar({ show, onHide, idDetail }) {
    const [pagination, setPagination] = useState(10);
    
    const handlePagination = (event) => {
        setPagination(event.target.value);
    };
    
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='bhr-modal ps-3 pt-3 pe-3 pb-0'>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <h4 className='mb-0'>Detail Tagihan <small>20 December 2022</small></h4>
                        <h3 className='mb-0'>Rp 43,000,000</h3>
                    </div>
                    <div className='bhr-table-custom'>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Company Name</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>
                                                {row.company_name}
                                            </TableCell>
                                            <TableCell>{row.amount}</TableCell>
                                            <TableCell>
                                                <Link href={"/"} className="bhr-link">See Detail</Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className='bhr-table-custom-pagination ps-4 pe-4 pt-3 pb-0'>
                            <div className='row'>
                                <div className='col-12 col-md-4'>
                                    <div className='w-100 h-100 d-flex align-items-center justify-content-start'>
                                        <p className='mb-0 font-12'>1-10 of 195 items</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-8'>
                                    <div className='w-100 h-100 d-flex align-items-center justify-content-end'>
                                        <Pagination className='bhr-pagination' count={1} />
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant='contained' className='bhr-btn-primary ps-3 pe-3 pt-2 pb-2 font-13' disableElevation onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}

export default ModalCalendar