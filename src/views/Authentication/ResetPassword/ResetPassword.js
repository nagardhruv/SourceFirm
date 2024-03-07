import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as Actions from '../../../store/actions';
import Form from './component/Form';
import { toast } from 'react-toastify';

function ResetPassword(props) {
    const { match } = props;
    const dispatch = useDispatch();

    const handledResetPassword = (values) => {
        const formData = new FormData();
        formData.append('new_password1', values.new_password1);
        formData.append('new_password2', values.new_password2);
        formData.append('uid', match.params.uid);
        formData.append('token', match.params.token);
        dispatch(Actions.resetPassword(formData)).then(res => {
            if (res.status === 200) {
                toast.success(res.data.detail);
                props.history.push('/login');
            } else {
                Object.keys(res.data).forEach((error) => {
                    toast.error(res.data[error][0]);
                });
            }
        }).catch(() => {
            toast.error("Something went wrong");
        });
    }

    const validateToken = () => {
        try {
            const formData = new FormData();
            formData.append('uid', match.params.uid);
            formData.append('token', match.params.token);
            dispatch(Actions.validateToken(formData)).then((response) => {
                if (response.status !== 200) {
                    toast.error(response.data?.token[0]);
                    props.history.push('/login');
                }
            }).catch(() => {
                toast.error('Something went wrong...')
                props.history.push('/login');
            });
        } catch (error) {
            toast.error('Something went wrong...')
            props.history.push('/login');
        }
    }

    useEffect(() => {
        validateToken();
    }, [])

    return (
        <div>
            <Form onSubmit={(values) => {
                handledResetPassword(values);
            }} />
        </div>
    );
}

export default ResetPassword;
