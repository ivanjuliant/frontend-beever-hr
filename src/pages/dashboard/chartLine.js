import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { dataMonth } from '../../helpers/dataMonth';
import { FormControl, MenuItem, Select } from '@mui/material';
import Chart from 'react-apexcharts';

const ChartLine = () => {
    const [valueChart, setValueChart] = useState(10);

    let dataRepayment = [
        { x: 'Jan', y: 1200000, },
        { x: 'Feb', y: 1250000, },
        { x: 'Mar', y: 1100000, },
        { x: 'Apr', y: 800000, },
        { x: 'Mei', y: 700000, },
        { x: 'Jun', y: 500000, },
        { x: 'Jul', y: 300000, },
        { x: 'Agu', y: 500000, },
        { x: 'Sep', y: 800000, },
        { x: 'Okt', y: 900000, },
        { x: 'Nov', y: 1000000, },
        { x: 'Des', y: 1210000, },
    ];
    let dataDisbursed = [
        { x: 'Jan', y: 800000, },
        { x: 'Feb', y: 1200000, },
        { x: 'Mar', y: 1400000, },
        { x: 'Apr', y: 130000, },
        { x: 'Mei', y: 900000, },
        { x: 'Jun', y: 700000, },
        { x: 'Jul', y: 500000, },
        { x: 'Agu', y: 600000, },
        { x: 'Sep', y: 800000, },
        { x: 'Okt', y: 1000000, },
        { x: 'Nov', y: 1100000, },
        { x: 'Des', y: 800000, },
    ];

    let labelFormatter = (value) => {
        let val = Math.abs(value);
        if (val >= 1000000) {
            val = (val / 1000).toFixed(0) + 'K';
        }
        else if (val >= 100000 && val <= 1000000) {
            val = (val / 1000).toFixed(0) + 'K';
        }
        return val;
    };

    let options = {
        series: [
            {
                name: 'Repayment',
                data: dataRepayment,
                color: '#3661EB'
            },
            {
                name: 'Disbursed',
                data: dataDisbursed,
                color: '#00A3B4'
            },
        ],
        markers: {
            size: 0,
        },
        chart: {
            height: '100%',
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: dataMonth,
        },
        yaxis: {
            tickAmount: 4,
            labels: {
                formatter: labelFormatter,
            },
        },
        legend: {
            show: false,
        },
    };

    const handleChange = (event) => {
        setValueChart(event.target.value);
    };

    return (
        <div style={{ borderRadius: '15px' }} className="ps-4 pe-4 pt-3 pb-3 mt-3 bg-white">
            <div>
                <Row>
                    <Col>
                        <div style={{ paddingTop: '0.5rem' }}>
                            <h1 className='bhr-title'>Transaction</h1>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='d-flex align-items-center justify-content-start h-100'>
                            <div className='bhr-chart-legend me-3'>
                                <div className='bhr-chart-legend-blue'>&nbsp;</div>
                                <p className='mb-0'>Repayment</p>
                            </div>
                            <div className='bhr-chart-legend'>
                                <div className='bhr-chart-legend-green'>&nbsp;</div>
                                <p className='mb-0'>Disbursed</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={valueChart}
                                    onChange={handleChange}
                                    className={"bhr-select-control"}
                                >
                                    <MenuItem value={10}>Weekly</MenuItem>
                                    <MenuItem value={20}>Monthly</MenuItem>
                                    <MenuItem value={30}>Yearly</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='mt-3'>
                <Chart options={options} series={options.series} className="bhr-chart" height={300} />
            </div>
        </div>
    );
};

export default ChartLine;