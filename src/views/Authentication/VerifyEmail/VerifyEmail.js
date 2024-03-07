import React, { useEffect, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { LoaderContext } from "utils/LoaderContext";
import * as Actions from "../../../store/actions/index";
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import Form from "./component/Form";
import { store } from '../../../store';

function VerifyEmail(props) {
    const state = store.getState();
    const token = state.authReducer.user?.token ?? state.authReducer.tempUser?.token ?? null;
    const { match } = props;
    const dispatch = useDispatch();
    const { toggalLoader } = useContext(LoaderContext);
    const [isExpire, setisExpire] = useState(false);


    const handleVerifyUser = () => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('uid', match.params.uid);
        formData.append('token', match.params.token);
        dispatch(Actions.verifyUser(formData)).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'LOGOUT_USER', payload: null });
                dispatch(Actions.getUserDetailsWithToken(token)).then(res => {
                    if (res.status === 200) {
                        if (res.data.is_email_verified) {
                            dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                            dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                            dispatch({ type: 'LOGIN_TEMP_USER', payload: {} });
                        }
                    } else {
                        dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                    }
                }).catch(() => {
                    dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                });

                toggalLoader(false);
                toast.success('User verified successfully');
                props.history.push('/login');

            } else {
                setisExpire(true);
                toggalLoader(false);
                toast.error(res.data.token[0]);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }
    useEffect(() => {
        handleVerifyUser();
    }, []);

    return (
        <Grid container className='loginpage'>
            <LeftContainer />
            <Grid className="right-container signUp-container">
                <RightContainer>
                    <Form isExpire={isExpire} />
                </RightContainer>
            </Grid>
        </Grid>
    );
}

export default VerifyEmail;
