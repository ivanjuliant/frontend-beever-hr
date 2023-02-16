import React from 'react';
import { Button } from 'react-bootstrap';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function ContentPersonal() {
    return (
        <div className='bhr-content'>
            <div className='bhr-content-tab'>
                <h5>Data Diri</h5>
                <div className='bhr-content-tab-list mb-4'>
                    <div className='w-100 mb-1'>
                        <label>Full Name</label>
                        <span>: Raplh Edward</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Email</label>
                        <span>: ralphedward@gmail.com</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Mobile Phone</label>
                        <span>: 0812104566789</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Birthplace</label>
                        <span>: Bekasi</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Birthdate</label>
                        <span>: 21 Juni 1991</span>
                        <span className='badge-bhr-success ms-2 font-12'>31 years old</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Gender</label>
                        <span>: Laki-Laki</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Religion</label>
                        <span>: Islam</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Matrial Status</label>
                        <span>: Married</span>
                    </div>
                </div>
                <Button className='bhr-btn-table-primary font-13'>
                    <EditRoundedIcon fontSize='small' className='me-1' /> Edit
                </Button>
            </div>
            <hr />
            <div className='bhr-content-tab'>
                <h5>Identity & Address</h5>
                <div className='bhr-content-tab-list mb-4'>
                    <div className='w-100 mb-1'>
                        <label>ID Type</label>
                        <span>: KTP (Kartu Tanda Peduduk)</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>ID Number</label>
                        <span>: 3216066104060012</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Provience</label>
                        <span>: Jawa Barat</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>City</label>
                        <span>: Bekasi</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Kecamatan</label>
                        <span>: Tambun Selatan</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Kelurahan</label>
                        <span>: Mekarsari</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Postal Code</label>
                        <span>: 17510</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Citizen ID Address</label>
                        <span>: Jl. Meranti Blok C.18 No.1, Tambun Selatan</span>
                    </div>
                    <div className='w-100 mb-1'>
                        <label>Residential Address</label>
                        <span>: -</span>
                    </div>
                </div>
                <Button className='bhr-btn-table-primary font-13'>
                    <EditRoundedIcon fontSize='small' className='me-1' /> Edit
                </Button>
            </div>
        </div>
    )
}

export default ContentPersonal