import React from 'react';
import { IconButton, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Profile from '../../assets/img/profile.jpg';
import NotificationIcon from '../../assets/svg/Notification.svg';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NotificationListIcon from '../../assets/img/icon_notifications.png';
import SettingIcon from '../../assets/svg/Setting.svg';
import CircleIcon from '@mui/icons-material/Circle';

function Headerbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorProfile, setAnchorProfile] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfile = (event) => {
        setAnchorProfile(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseProfile = () => {
        setAnchorProfile(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const profile = Boolean(anchorProfile);
    const spec = profile ? 'simple-popover' : undefined;

    return (
        <div className='bhr-header'>
            <div className='bhr-header-profile'>
                <div className='bhr-header-profile-btn'>
                    <IconButton size='small' aria-label="notification" className="me-2">
                        <ReactSVG src={SettingIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium headIcon" />
                    </IconButton>
                    <IconButton size='small' aria-label="notification" onClick={handleClick}>
                        <ReactSVG src={NotificationIcon} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium headIcon" />
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        elevation={1}
                        className='bhr-popover'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <div className='bhr-popover-content pt-3 pb-0'>
                            <h3 className='ps-3 pe-3'>Notification</h3>
                            <div className='bhr-popover-content-wrap active'>
                                <div className='bhr-popover-content-wrap-left'>
                                    <img src={NotificationListIcon} width={26} height={26} alt="Beever IMG" />
                                </div>
                                <div className='bhr-popover-content-wrap-center'>
                                    <h5><strong>Reminder!</strong> Invoice No. SHHCS328 is due on 25-Jun-2022 <span>Resend Invoice</span></h5>
                                    <p>14 minutes ago</p>
                                </div>
                                <div className='bhr-popover-content-wrap-right'>
                                    <CircleIcon fontSize='small' />
                                </div>
                            </div>
                            <div className='bhr-popover-content-wrap'>
                                <div className='bhr-popover-content-wrap-left'>
                                    <img src={NotificationListIcon} width={26} height={26} alt="Beever IMG" />
                                </div>
                                <div className='bhr-popover-content-wrap-center'>
                                    <h5><strong>Reminder!</strong> Invoice No. SHHCS328 is due on 25-Jun-2022 <span>Resend Invoice</span></h5>
                                    <p>14 minutes ago</p>
                                </div>
                                <div className='bhr-popover-content-wrap-right'>
                                </div>
                            </div>
                            <div className='bhr-popover-content-wrap'>
                                <div className='bhr-popover-content-wrap-left'>
                                    <img src={NotificationListIcon} width={26} height={26} alt="Beever IMG" />
                                </div>
                                <div className='bhr-popover-content-wrap-center'>
                                    <h5><strong>Reminder!</strong> Invoice No. SHHCS328 is due on 25-Jun-2022 <span>Resend Invoice</span></h5>
                                    <p>14 minutes ago</p>
                                </div>
                                <div className='bhr-popover-content-wrap-right'>
                                </div>
                            </div>
                            <div className='ps-3 pe-3 pt-2 pb-2'>
                                <Link to={"/"} className={"bhr-link fw-600"}>See All Notification</Link>
                            </div>
                        </div>
                    </Popover>
                </div>
                <div className='d-flex cursor-pointer'>
                    <div className='bhr-header-profile-effect'>
                        <img src={Profile} alt={"Profile"} width={40} height={40} />
                    </div>
                    <div className='bhr-header-profile-text d-flex align-items-center' onClick={handleProfile}>
                        <div>
                            <p className='fw-bold font-13 text-dark mb-0'>Ivan Juliant</p>
                            <p className='font-11 text-muted mb-0'>Administrator</p>
                        </div>
                        <KeyboardArrowDownRoundedIcon className='ms-3' />
                    </div>
                    <Popover
                        id={spec}
                        open={profile}
                        anchorEl={anchorProfile}
                        onClose={handleCloseProfile}
                        elevation={1}
                        className='bhr-popover'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <div className='bhr-popover-profile ps-4 pe-4 pt-3 pb-3'>
                            <Link to={"/"} className="bhr-link ps-4 pe-4 pt-1 pb-1 text-uppercase">
                                Logout
                            </Link>
                        </div>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Headerbar