import React, { useContext } from "react";
import Form from "./component/Form";
import * as Actions from '../../../store/actions/index'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import history from "utils/history";
import { LoaderContext } from "utils/LoaderContext";

function ForgetPassword() {

    const dispatch = useDispatch();
    const { toggalLoader } = useContext(LoaderContext);

    const handleSubmit = (data) => {
        toggalLoader(true);
        dispatch(Actions.forgotPassword(data))
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: 'FORGOT_PASSWORD', payload: response.data });
                    toast.success(response.data.detail);
                    history.push({ pathname: '/resendmail', state: data });
                    toggalLoader(false);
                } else {
                    Object.keys(response.data).forEach((error) => {
                        toast.error(response.data[error][0]);
                    })
                    dispatch({ type: 'FORGOT_PASSWORD', payload: null });
                    toggalLoader(false);
                }
            }).catch(() => {
                toggalLoader(false);
                toast.error('Something went wrong...');
            });
    }
    return (
        <Form onSubmit={(value) => {
            handleSubmit(value);
        }} />
    )
}

export default ForgetPassword;
