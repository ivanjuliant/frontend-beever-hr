import React, { useEffect, useState } from 'react'
import Headerbar from '../../layout/header';
import Sidebar from '../../layout/sidebar';
import moment from 'moment';
import CustomCalendar from './components/fullCalendar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function CalendarComponent() {
    const initialSchedules = [
        {
            id: 'X1',
            title: '3 Company',
            start: moment('2022-11-29').format(),
            end: moment('2022-11-29').format(),
            color: 'blue',
            description: 'Rp34.000.000'
        },
        {
            id: 'X2',
            title: '3 Company',
            start: moment('2022-11-30').format(),
            end: moment('2022-11-30').format(),
            color: 'blue',
            description: 'Rp34.000.000'
        },
        {
            id: 'X3',
            title: '3 Company',
            start: moment('2022-12-01').format(),
            end: moment('2022-12-01').format(),
            color: 'blue',
            description: 'Rp34.000.000'
        },
        {
            id: 'X4',
            title: '3 Company',
            start: moment('2022-12-07').format(),
            end: moment('2022-12-07').format(),
            color: 'orange',
            description: 'Rp34.000.000'
        },
        {
            id: 'X5',
            title: '3 Company',
            start: moment('2022-12-16').format(),
            end: moment('2022-12-16').format(),
            color: 'orange',
            description: 'Rp34.000.000'
        },
        {
            id: 'X6',
            title: '3 Company',
            start: moment('2022-12-23').format(),
            end: moment('2022-12-23').format(),
            color: 'orange',
            description: 'Rp34.000.000'
        },
        {
            id: 'X7',
            title: '3 Company',
            start: moment('2022-12-24').format(),
            end: moment('2022-12-24').format(),
            color: 'green',
            description: 'Rp34.000.000'
        },
        {
            id: 'X8',
            title: '3 Company',
            start: moment('2022-12-27').format(),
            end: moment('2022-12-27').format(),
            color: 'green',
            description: 'Rp34.000.000'
        },
        {
            id: 'X9',
            title: '3 Company',
            start: moment('2022-12-29').format(),
            end: moment('2022-12-29').format(),
            color: 'green',
            description: 'Rp34.000.000'
        },
    ];

    const calendarRef = React.createRef();
    const [title, setTitle] = useState();
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
                                <div className='bhr-pages-container-content-center'>
                                    <div className='card bhr-card'>
                                        <div className='card-body'>
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