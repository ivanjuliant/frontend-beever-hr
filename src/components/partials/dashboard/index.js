import React from 'react';
import Headerbar from '../../layout/header';
import Sidebar from '../../layout/sidebar';
import Chart from 'react-apexcharts';
import { formatRupiah } from '../../helpers/currencyFormat';
import { Nav, Tab } from 'react-bootstrap';
import TableAttandance from './components/tableAttandance';
import { ReactSVG } from 'react-svg';
import AttandanceIcon from '../../../assets/svg/Attandance.svg';
import LeaveIcon from '../../../assets/svg/Leave.svg';
import OvertimeIcon from '../../../assets/svg/Overtime.svg';
import SalaryIcon from '../../../assets/svg/Salary.svg';
import ReimburseIcon from '../../../assets/svg/Reimburse.svg';

const DashboardComponent = () => {
    let labelFormatter = (value) => {
        let val = Math.abs(value);
        if (val > 10000) {
            val = formatRupiah((val / 1000000).toFixed(3)).replace("Rp", "") + 'K';
        } else {
            val = formatRupiah(val).replace("Rp", "")
        }
        return val.substring(1);
    };

    const dummyChartJobLevel = {
        options: {
            labels: ['Kepala Divisi', 'Kepala Tim', 'Manajemen', 'Staff'],
            chart: { type: 'donut' },
            legend: { show: true, position: 'bottom' },
            dataLabels: {
                enabled: false,
            },
            colors: ['#7789FE', '#BD74EA', '#57B4C7', '#FE7777'],
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        let val = Math.abs(value);
                        if (val > 10000) {
                            val = formatRupiah((val / 1000000).toFixed(3)).replace("Rp", "") + 'K';
                        } else {
                            val = formatRupiah(val).replace("Rp", "")
                        }
                        return val.substring(1);
                    },
                }
            },
            states: {
                hover: { filter: { type: 'lighten', value: 0.5 } },
                active: { filter: { type: 'none', value: 0 } },
            },
            stroke: { width: 0 },
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            name: { show: true },
                            total: {
                                show: true,
                                label: 'Total',
                                showAlways: true,
                                formatter: function (w) {
                                    const totals = w.globals.seriesTotals;
                                    const result = totals.reduce((a, b) => a + b, 0);
                                    const final = labelFormatter(result);

                                    return final;
                                },
                            },
                            value: {
                                offsetY: 3,
                            },
                        },
                    },
                },
            },
        },

        series: [309, 462, 308, 463],
    };

    const dummyChartGenderDiversity = {
        options: {
            labels: ['Laki-laki', 'Perempuan'],
            chart: { type: 'donut' },
            legend: { show: true, position: 'bottom' },
            dataLabels: {
                enabled: false,
            },
            colors: ['#FED077', '#ED66CF'],
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        let val = Math.abs(value);
                        if (val > 10000) {
                            val = formatRupiah((val / 1000000).toFixed(3)).replace("Rp", "") + 'K';
                        } else {
                            val = formatRupiah(val).replace("Rp", "")
                        }
                        return val.substring(1);
                    },
                }
            },
            states: {
                hover: { filter: { type: 'lighten', value: 0.5 } },
                active: { filter: { type: 'none', value: 0 } },
            },
            stroke: { width: 0 },
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            name: { show: true },
                            total: {
                                show: true,
                                label: 'Total',
                                showAlways: true,
                                formatter: function (w) {
                                    const totals = w.globals.seriesTotals;
                                    const result = totals.reduce((a, b) => a + b, 0);
                                    const final = labelFormatter(result);

                                    return final;
                                },
                            },
                            value: {
                                offsetY: 3,
                            },
                        },
                    },
                },
            },
        },

        series: [1079, 463],
    };

    const dummyChartEmploymentStatus = {
        options: {
            labels: ['Kontrak', 'Intern', 'Probation', 'Permanent'],
            chart: { type: 'donut' },
            legend: { show: true, position: 'bottom' },
            dataLabels: {
                enabled: false,
            },
            colors: ['#3A6FF8', '#14CC26', '#FF8E26', '#F9CB9C'],
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value) {
                        let val = Math.abs(value);
                        if (val > 10000) {
                            val = formatRupiah((val / 1000000).toFixed(3)).replace("Rp", "") + 'K';
                        } else {
                            val = formatRupiah(val).replace("Rp", "")
                        }
                        return val.substring(1);
                    },
                }
            },
            states: {
                hover: { filter: { type: 'lighten', value: 0.5 } },
                active: { filter: { type: 'none', value: 0 } },
            },
            stroke: { width: 0 },
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            name: { show: true },
                            total: {
                                show: true,
                                label: 'Total',
                                showAlways: true,
                                formatter: function (w) {
                                    const totals = w.globals.seriesTotals;
                                    const result = totals.reduce((a, b) => a + b, 0);
                                    const final = labelFormatter(result);

                                    return final;
                                },
                            },
                            value: {
                                offsetY: 3,
                            },
                        },
                    },
                },
            },
        },

        series: [309, 462, 308, 463],
    };

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
                                        <h1>Dashboard</h1>
                                        {/* <p>{moment().format("DD MMMM YYYY")}</p> */}
                                    </div>
                                    <div className='row mb-4'>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card'>
                                                <div className='card-body'>
                                                    <div className='bhr-donut-card'>
                                                        <p>Job Level</p>
                                                        <Chart
                                                            options={dummyChartJobLevel.options}
                                                            series={dummyChartJobLevel.series}
                                                            type='donut'
                                                            width={'100%'}
                                                            className="bhr-apexcharts-legend"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card h-100'>
                                                <div className='card-body'>
                                                    <div className='bhr-donut-card'>
                                                        <p>Gender Diversity</p>
                                                        <Chart
                                                            options={dummyChartGenderDiversity.options}
                                                            series={dummyChartGenderDiversity.series}
                                                            type='donut'
                                                            width={'100%'}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className='card bhr-card h-100'>
                                                <div className='card-body'>
                                                    <div className='bhr-donut-card'>
                                                        <p>Employment Status</p>
                                                        <Chart
                                                            options={dummyChartEmploymentStatus.options}
                                                            series={dummyChartEmploymentStatus.series}
                                                            type='donut'
                                                            width={'100%'}
                                                            className="bhr-apexcharts-legend"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Tab.Container defaultActiveKey="attandance" justify>
                                        <Nav variant="pills" fill={true} className="bhr-nav-pill-dashboard mb-4">
                                            <Nav.Item>
                                                <Nav.Link eventKey="attandance">
                                                    <ReactSVG src={AttandanceIcon} />
                                                    Attandance
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="leave">
                                                    <ReactSVG src={LeaveIcon} />
                                                    Leave
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="overtime">
                                                    <ReactSVG src={OvertimeIcon} />
                                                    Overtime
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="salary">
                                                    <ReactSVG src={SalaryIcon} />
                                                    Salary Advance
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="reimburse">
                                                    <ReactSVG src={ReimburseIcon} />
                                                    Reimburse
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="attandance">
                                                <TableAttandance />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="leave">
                                                <TableAttandance />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="overtime">
                                                <TableAttandance />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="salary">
                                                <TableAttandance />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="reimburse">
                                                <TableAttandance />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DashboardComponent;