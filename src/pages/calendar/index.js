import React, { useEffect, useState } from 'react'
import Headerbar from '../../components/layout/header';
import Sidebar from '../../components/layout/sidebar';
import moment from 'moment';
import CustomCalendar from './components/fullCalendar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { ReactSVG } from 'react-svg';
import PlusIcon from '../../assets/svg/Plus.svg';
import { Button } from 'react-bootstrap';
import CircleIcon from '@mui/icons-material/Circle';

function CalendarComponent() {
    const initialSchedules = [
        {
            id: 'X1',
            title: 'All Employee',
            start: moment('2023-02-01').format(),
            end: moment('2023-02-01').format(),
            color: 'blue',
            description: 'New Year\'s Day'
        },
        {
            id: 'X2',
            title: 'All Employee',
            start: moment('2023-02-23').format(),
            end: moment('2023-02-23').format(),
            color: 'orange',
            description: 'Outing Together'
        },
    ];

    const calendarRef = React.createRef();
    const [title, setTitle] = useState();
    const [filterCalendar, setFilterCalendar] = useState("all");
    const [schedule, setSchedule] = useState(initialSchedules);

    const nextHandle = () => {
        let calendarApi = calendarRef.current.getApi();
        console.log(calendarApi);
        calendarApi.next();
        setTitle(calendarApi.currentDataManager.data.viewTitle);
    };

    const prevHandle = () => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.prev();
        setTitle(calendarApi.currentDataManager.data.viewTitle);
    };

    useEffect(() => {
        let calendarApi = calendarRef.current.getApi();
        setTitle(calendarApi.currentDataManager.data.viewTitle);
    }, [calendarRef]);

    return (
        <section className='bhr-pages'>
            <div className='h-100'>
                <div className='bhr-pages-container'>
                    <Sidebar />
                    <div className='bhr-pages-container-content' style={{ width: "100%", paddingLeft: "17%" }}>
                        <Headerbar />
                        <div className='row h-100 m-0'>
                            <div className='col-12 bg-default'>
                                <div className='bhr-pages-container-content-header'>
                                    <div className='bhr-pages-container-content-header-title-calendar'>
                                        <h1>Calendar</h1><small>12 Total Event in January</small>
                                    </div>
                                    <div className='bhr-pages-container-content-header-arrow'>
                                        <Button className='bhr-btn-primary-icon'><ReactSVG src={PlusIcon} /> Create Agenda</Button>
                                    </div>
                                </div>
                                <div className='bhr-pages-container-content-center'>
                                    <div className='card bhr-card-calendar'>
                                        <div className='card-body p-0'>
                                            <div className='bhr-pages-container-content-tab pb-2'>
                                                <div className='bhr-pages-container-content-tab-content'>
                                                    <div className='bhr-pages-container-content-tab-content-left'>
                                                        <p className='mb-0'>Show Agenda</p>
                                                        <div className='bhr-tabs-btn'>
                                                            <Button variant='link' onClick={() => setFilterCalendar("all")} className={filterCalendar === "all" ? "active" : ""}>All</Button>
                                                            <Button variant='link' onClick={() => setFilterCalendar("outing")} className={filterCalendar === "outing" ? "active" : ""}>Outing</Button>
                                                            <Button variant='link' onClick={() => setFilterCalendar("holiday")} className={filterCalendar === "holiday" ? "active" : ""}>Holiday</Button>
                                                        </div>
                                                    </div>
                                                    <div className='bhr-pages-container-content-tab-content-right'>
                                                        <div className='bhr-sign-one'>
                                                            <CircleIcon fontSize='small' /> Libur Nasional
                                                        </div>
                                                        <div className='bhr-sign-two'>
                                                            <CircleIcon fontSize='small' /> Outing Together
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className='bhr-pages-container-content-header pt-0'>
                                                <div className='bhr-pages-container-content-header-title'>
                                                    <h1>{title}</h1>
                                                </div>
                                                <div className='bhr-pages-container-content-header-arrow'>
                                                    <button className='bhr-btn-arrow bhr-btn-linearrow-right' onClick={() => prevHandle()}>
                                                        <ChevronLeftRoundedIcon />
                                                    </button>
                                                    <p className='mb-0'>{title}</p>
                                                    <button className='bhr-btn-arrow bhr-btn-linearrow-left' onClick={() => nextHandle()}>
                                                        <ChevronRightRoundedIcon />
                                                    </button>
                                                </div>
                                            </div>
                                            <CustomCalendar
                                                calendarRef={calendarRef}
                                                title={title}
                                                setTitle={setTitle}
                                                schedule={schedule}
                                                setSchedule={setSchedule}
                                            />
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
}

export default CalendarComponent;