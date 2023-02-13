import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import Swal from 'sweetalert2';
import ModalCalendar from './modalCalendar';

function CustomCalendar({ calendarRef, schedule }) {
    const [event, setEvent] = useState([]);
    const [idDetail, setIdDetail] = useState();
    const [modalCalendar, setModalCalendar] = useState(false);

    useEffect(() => {
        let dataObj = [];
        schedule.map(function (data, index) {
            const obj = {
                id: data.id,
                title: data.title,
                start: data.start,
                end: data.end,
                description: data.description,
                className: "bhr-time-" + data.color,
            }

            dataObj.push(obj);
        });

        setEvent(dataObj);
    }, [schedule])

    const renderEventContent = (eventInfo) => {
        return (
            <div className='bhr-calendar-day'>
                <div className="bhr-calendar-day-left"></div>
                <div className="bhr-calendar-day-top">{eventInfo.event.extendedProps.description}</div>
                <div className="bhr-calendar-day-bottom">{eventInfo.event.title}</div>
            </div>
        )
    };

    return (
        <div>
            <ModalCalendar show={modalCalendar} onHide={() => setModalCalendar(false)} idDetail={idDetail} />
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={false}
                initialDate={new moment().format('YYYY-MM-DD')}
                initialView='dayGridMonth'
                droppable={false}
                height={'auto'}
                contentHeight={'auto'}
                headerToolbar={{
                    left: '',
                    center: '',
                    right: '',
                }}
                eventClick={(info) => {
                    setIdDetail(info.event.id);
                    setModalCalendar(true);
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                    meridiem: false,
                }}
                slotLabelFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: false,
                }}
                eventChange={(info) => {
                    Swal.fire({
                        title: 'Konfirmasi Perubahan Jadwal',
                        text: 'Apakah anda yakin ingin melakukan perubahan jadwal ?',
                        showDenyButton: true,
                        confirmButtonText: 'Ganti',
                        denyButtonText: `Batal`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire('Perubahan Jadwal Berhasil!', 'Silahkan refresh jika belum terjadi perubahan jadwal', 'success')
                            setEvent(current => current.map(obj => {
                                if (obj.id === info.event.id) {
                                    return { ...obj, start: moment(info.event.start).format(), end: moment(info.event.end).format() }
                                }

                                return obj;
                            }))
                        } else if (result.isDenied) {
                            info.revert()
                        }
                    })
                }}
                events={event}
                eventContent={renderEventContent}
            />
        </div>
    );
}

export default CustomCalendar;
