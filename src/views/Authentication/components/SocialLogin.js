import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import googleIcon from 'assets/img/icons/Google-icon.svg';
// import linkedinIcon from 'assets/img/icons/linkedin.svg';
import { useDispatch } from 'react-redux';
import * as Actions from '../../../store/actions/index';
import { toast } from 'react-toastify';
import { LoaderContext } from "utils/LoaderContext";
import history from "utils/history";
import { getUserStatus } from 'utils/Common';
import { USER_TYPES } from "utils/constant";
import { useGoogleLogin } from '@react-oauth/google';

export default function SocialLogin(props) {
    const { activeUser } = props;
    const dispatch = useDispatch();
    const { toggalLoader } = useContext(LoaderContext);

    const getUserDetails = (values, message) => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                toast.success(message);
                let route = getUserStatus(res.data, values?.username);
                history.push(route);
            }
            else {
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
                toast.error(res.data.non_field_errors[0]);
            }
            toggalLoader(false);
        }).catch(() => {
            toggalLoader(false);
        });
    }

    const signInWithGoogle = (response) => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('access_token', response.access_token);
        dispatch(Actions.signWithGoogle(formData)).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'LOGIN_USER', payload: res.data });
                if (res.data.user_type === USER_TYPES.TEMPORARY_LOGIN_USER) {
                    toggalLoader(false);
                    updateUserType();
                } else {
                    getUserDetails(null, "Login successfully");
                    // toggalLoader(false);
                    // toast.success("Signup Successfully");
                    // history.push('/');
                }
            } else {
                dispatch({ type: 'LOGIN_USER', payload: null });
                toggalLoader(false);
                toast.error(res.data.non_field_errors[0]);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }

    const updateUserType = () => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('user_type', activeUser);
        dispatch(Actions.updateUserType(formData)).then(res => {
            toggalLoader(false);
            if (res.status === 200) {
                getUserDetails(res.data, "Signup Successfully");
            } else {
                toast.error(res.data.non_field_errors[0]);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }

    const login = useGoogleLogin({
        onSuccess: tokenResponse => signInWithGoogle(tokenResponse),
    })
    return (
        <Grid className="socialLogin" gap={2.8}>
            <Button size='large' className='media-btn'
                onClick={e => {
                    e.preventDefault();
                    document.querySelector('.google_login_btn').click()
                }}>
                <span><img src={googleIcon} alt='img' /></span>
                Sign up with Google
            </Button>
            {/* <Button size='large' disabled={true} className='media-btn'>
                <span><img src={linkedinIcon} alt='img' /></span>
                Sign up with linkedin
            </Button> */}
            <div style={{ display: 'none' }}>
                <Button className='media-btn google_login_btn' onClick={() => login()}>
                    <span><img src={googleIcon} alt='img' /></span>
                </Button>
            </div>
        </Grid>
    )
}
