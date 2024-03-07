import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';;
import Link from '@mui/material/Link';
import logo from 'assets/img/logo.png';
import 'assets/css/header.css';
import * as Actions from '../../store/actions/index';
import { useDispatch, useSelector } from "react-redux";
import history from "utils/history";
import LogoutDialog from "components/Dialog/LogoutDialog";
import 'assets/css/allModals.css';
import { getToken } from "utils/Storage";
import { USER_TYPES } from "utils/constant";
import profileImage from 'assets/img/default-avatar.png';
import ChangePasswordDialog from 'components/Dialog/ChangePasswordDialog';
import { toast } from 'react-toastify';
import { updateSyncErrors } from "redux-form";
import WebSocketService from "../../services/WebSocketService";
import { persistor } from "../../store";
import { Helmet } from "react-helmet";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
    const isLoggedIn = getToken();
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state?.authReducer?.userDetails);
    const chatCount = useSelector(state => state?.chatReducer?.chatCount);
    const connection = useSelector(state => state.socketReducer?.connection);
    // const userStatuses = useSelector(state => state.commonReducer?.userStatuses);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [agencyRequestDialog, setAgencyRequestDialog] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [notificationDialogueData, setNotificationDialogueData] = useState({
        title: "New Agency Request Sent",
        message: "The new agency request has been sent successfully please wait for the administration approval."
    });
    const path = window.location.pathname;
    const isMobileView = (window.innerWidth <= 899);
    const VIEWS = {
        BEFORE_LOGIN: 1,
        AFTER_LOGIN: 2,
        ALL: 3,
        MOBILE_VIEW: 4
    };

    const staticPagePaths = ['/', '/home', '/about-us', '/contact-us', '/faq', '/login', '/signup'];

    const pages = [
        // { name: 'Dashboard', path: '/user-dashboard', view: 2, access: [USER_TYPES.CLIENT], checkUserColumn: 'is_new_registered' },
        { name: 'About us', path: '/about-us', view: 3, access: Object.values(USER_TYPES), checkUserColumn: '' },
        { name: 'Blog', path: '/blog', href: process.env.REACT_APP_BASE_URL + '/blog', view: 3, access: Object.values(USER_TYPES), checkUserColumn: '' },
        { name: 'Manage Developers', path: '/manage-developers', view: 2, access: [USER_TYPES.AGENCY], checkUserColumn: 'is_new_registered' },
        { name: 'Sign up', path: '/signup', view: 4, access: '', checkUserColumn: '' },
        // { name: 'Find developers', path: '/find-developers', view: 1, access: [USER_TYPES], checkUserColumn: '' },
        // { name: 'Find jobs', path: '/find-jobs', view: 1, access: [USER_TYPES.AGENCY], checkUserColumn: '' },
        // { name: 'Blogs', path: '/blogs', view: 1, access: [USER_TYPES.AGENCY], checkUserColumn: '' },
        { name: 'Manage Job Posts', path: '/manage-job-posts', view: 2, access: [USER_TYPES.CLIENT], checkUserColumn: 'is_new_registered' },
        { name: 'My Requests', path: '/my-requests', view: 2, access: [USER_TYPES.CLIENT, USER_TYPES.FREELANCER], checkUserColumn: 'is_new_registered' },
        { name: 'My Proposals', path: '/my-proposals', view: 2, access: [USER_TYPES.CLIENT, USER_TYPES.FREELANCER], checkUserColumn: 'is_new_registered' },
        { name: 'Requests', path: '/requests', view: 2, access: [USER_TYPES.AGENCY], checkUserColumn: 'is_new_registered' },
        { name: 'Proposals', path: '/proposals', view: 2, access: [USER_TYPES.AGENCY], checkUserColumn: 'is_new_registered' },
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleChangePassword = (values) => {
        setProcessing(true);
        const formData = new FormData();
        formData.append('old_password', values.old_password);
        formData.append('new_password1', values.new_password1);
        formData.append('new_password2', values.new_password2);
        dispatch(Actions.changePassword(formData)).then(res => {
            if (res.status === 200) {
                setProcessing(false);
                toast.success("Password changed successfully");
                setOpenDialog(false);
            } else {
                if (res.data.old_password) {
                    dispatch(updateSyncErrors('ChangePasswordForm', {
                        old_password: res.data.old_password[0]
                    }));
                }
                if (res.data.new_password1) {
                    dispatch(updateSyncErrors('ChangePasswordForm', {
                        new_password1: res.data.new_password1[0]
                    }));
                }
                if (res.data.new_password2) {
                    dispatch(updateSyncErrors('ChangePasswordForm', {
                        new_password2: res.data.new_password2[0]
                    }));
                }
                setProcessing(false);
            }

        }).catch(() => {
            setProcessing(false);
        });
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenDialog = () => {
        handleCloseUserMenu();
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleLogout = () => {
        dispatch(Actions.logoutUser()).then(() => {
            if (connection) {
                connection.close();
                dispatch({ type: "INITIATE_CONNECTION", payload: null });
            }
            setAnchorElUser(null);
            handleClose();
            dispatch({ type: 'LOGOUT_USER', payload: null });
            dispatch({ type: 'GET_USER_DETAILS', payload: null });
            localStorage.removeItem("persist:root");
            persistor.purge();
            history.push("/login");
            window.location.reload();
        }).catch((e) => { toast.error("Something went wrong" + e.message) });
    }
    const getProfile = () => {
        setAnchorElUser(null);
        if (isLoggedIn)
            history.push((userDetails && userDetails?.is_new_registered && (!userDetails?.is_profile_in_review)) ? '/my-profile/add' : '/my-profile');
        else
            history.push('/login');
    }
    const handleOpenLogoutDialog = () => {
        setAnchorElUser(null);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleHomePage = (url, href = null) => {
        setAnchorElNav(null);
        if (href) {
            window.location.href = href;
        } else {
            history.push(url);
        }
    };
    const menusLinks = (links) => {
        return links.map((page, index) => {
            let activeClass = (path === page.path) ? "active" : "";
            switch (page.view) {
                case VIEWS.AFTER_LOGIN:
                    if (!page?.access?.includes(userDetails?.user_type) || userDetails?.[page?.checkUserColumn]) {
                        return null;
                    } else {
                        return <Link
                            key={index}
                            onClick={() => handleHomePage(page.path, page?.href)}
                            sx={{ my: 2, color: '#fff', display: 'block' }}
                            className={`header_menu ${activeClass}`}
                        >
                            {page.name}
                        </Link>
                    }
                case VIEWS.BEFORE_LOGIN:
                    if (!isLoggedIn) {
                        return <Link
                            key={index}
                            onClick={() => handleHomePage(page.path, page?.href)}
                            sx={{ my: 2, color: '#fff', display: 'block' }}
                            className={`header_menu ${activeClass}`}
                        >
                            {page.name}
                        </Link>
                    }
                    break;
                case VIEWS.ALL:
                    return <Link
                        key={index}
                        onClick={() => handleHomePage(page.path, page?.href)}
                        sx={{ my: 2, color: '#fff', display: 'block' }}
                        className={`header_menu ${activeClass}`}
                    >
                        {page.name}
                    </Link>
            }
        });
    }
    const menuLinksResponsive = (pageList) => {
        return pageList.map((page, index) => {
            switch (page.view) {
                case VIEWS.AFTER_LOGIN:
                    if (!page?.access?.includes(userDetails?.user_type) || userDetails?.[page?.checkUserColumn]) {
                        return null;
                    } else {
                        return <MenuItem key={index} onClick={() => handleHomePage(page.path, page?.href)}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    }
                case VIEWS.BEFORE_LOGIN:
                    if (!isLoggedIn) {
                        return <MenuItem key={index} onClick={() => handleHomePage(page.path, page?.href)}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem >
                    }
                    break;
                case VIEWS.ALL:
                    return <MenuItem key={index} onClick={() => handleHomePage(page.path, page?.href)}>
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem >
                case VIEWS.MOBILE_VIEW:
                    if (!isLoggedIn && isMobileView) {
                        return <MenuItem key={index} onClick={() => handleHomePage(page.path)}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem >
                    }
                    break;
            }
        });
    }
    const handleAgencyRequestDialog = () => {
        if (!userDetails?.can_request_new_agency) {
            toast.error("Reached maximum limit for Agency request, please contact Admin ");
            return false;
        }
        setAgencyRequestDialog(!agencyRequestDialog);
    }
    const handleAgencyRequestSubmit = (values) => {
        try {
            values.client = userDetails?.id;
            dispatch(Actions.newAgencyRequest(values)).then(response => {
                if (response.status === 201) {
                    getUserDetails();
                    toast.success('Agency requested successfully');
                } else {
                    Object.keys(response.data).forEach((error) => {
                        toast.error(response.data[error][0]);
                    })
                }
                handleAgencyRequestDialog();
            }).catch(() => {
                toast.error('Something went wrong...');
            });
        } catch (error) {
            toast.error('Something went wrong...');
        }
    }
    const getUserDetails = () => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'USER_STATUSES', payload: res.data });
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
            }
            else {
                dispatch({ type: 'USER_STATUSES', payload: null });
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
            }
        }).catch(() => {
            dispatch({ type: 'USER_STATUSES', payload: null });
            dispatch({ type: 'GET_USER_DETAILS', payload: {} });
        })
    }
    const handleNotificationOpen = () => {
        if (userDetails?.is_agency_pending_request) {
            const ndData = {
                ...notificationDialogueData,
                title: 'Request has Already Been sent',
                message: "The request for agency has already been sent, Please wait for the administration approval.",
            };
            setNotificationDialogueData(ndData);
        }
        else if (!userDetails?.can_request_new_agency) {
            toast.error("Reached maximum limit for Agency request, please contact Admin ");
            return false;
        }
        setNotificationOpen(!notificationOpen);
    }
    // const handleAgencyRequestStatus = () => {
    //     dispatch(Actions.getUserDetails()).then(res => {
    //         if (res.status === 200) {
    //             dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
    //             (res.data?.is_agency_pending_request) ? handleNotificationOpen() : handleAgencyRequestDialog();
    //         }
    //         else {
    //             dispatch({ type: 'GET_USER_DETAILS', payload: {} });
    //         }
    //     }).catch(() => {
    //         dispatch({ type: 'GET_USER_DETAILS', payload: {} });
    //     })
    // }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const menuRedirection = (value) => {
        history.push(`/how-it-works/${value}`);
        setAnchorEl(null);
    }

    WebSocketService();

    useEffect(() => {
        if (isLoggedIn) {
            getUserDetails();
        }
    }, [path]);

    return (
        <>
            {(isLoggedIn && !staticPagePaths.includes(path)) &&
                <Helmet>
                    <title>Source Firms</title>
                </Helmet>

            }
            <AppBar position="fixed" className='header'>
                <Container>
                    <Toolbar disableGutters className={`header-inner ${(userDetails?.user_type === USER_TYPES.CLIENT) ? "header-client-inner" : ""}`}>
                        <Grid sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} className='brand-logo'>
                            <Link onClick={() => handleHomePage('/')} className="cursor-pointer"> <img src={logo} alt="logo" /></Link>
                        </Grid>
                        {(userDetails?.user_type !== USER_TYPES.FREELANCER) &&
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar1"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    className="menu-appbar"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar1"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    className="responsive-menu"
                                >
                                    <Accordion className="how-it-works-responsive">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>How it works</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Link className="menu-box-item active" onClick={() => handleHomePage('/how-it-works/client')}>
                                                {/* <img src={HeaderMenuIcon1} alt="HeaderMenuIcon1" /> */}
                                                <span>For client</span>
                                            </Link>
                                            <Link className="menu-box-item" onClick={() => handleHomePage('/how-it-works/agency')}>
                                                {/* <img src={HeaderMenuIcon2} alt="HeaderMenuIcon1" /> */}
                                                <span>For agency</span>
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                    {menuLinksResponsive(pages)}
                                </Menu>
                            </Box>
                        }
                        <Typography
                            className='brand-logo'
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link onClick={() => handleHomePage('/')} className="cursor-pointer"><img src={logo} alt="logo" /></Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                           
                        </Box>
                        {isLoggedIn ?
                            <React.Fragment>
                                <Box sx={{ flexGrow: 0 }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className='header_icon-Btn profileBtn'>
                                        <Avatar className="header_icon user-profile-img" alt=""
                                            src={userDetails?.profile_image?.url ?? userDetails?.profile_image ?? profileImage}
                                        />
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                        className='appbar-menu'>
                                        <MenuItem onClick={handleOpenLogoutDialog}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </React.Fragment> :
                            <Box className="heading-sign-btn">
                                <Button className='secondaryButton login-btn' onClick={() => history.push('/login')}>
                                    Login
                                </Button>
                                <Button className='primaryButton login-btn sign-btn-home' onClick={() => history.push('/signup')}>
                                    Sign up
                                </Button>
                            </Box>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
            <LogoutDialog open={open} close={handleClose} logout={handleLogout} />
            {openDialog &&
                <ChangePasswordDialog open={openDialog} close={handleCloseDialog}
                    onSubmit={(values) => {
                        handleChangePassword(values);
                    }}
                    processing={processing} />
            }
        </>
    );
}

export default Header;
