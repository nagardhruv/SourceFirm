import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "store/actions/index";
import ManageAgencyProfile from 'views/AgencyProfile/ManageAgencyProfile';
import ManageClientProfile from '../ClientProfile/ManageClientProfile';
import { USER_TYPES } from 'utils/constant';
import ManageFreeLancerProfile from "views/FreelancerProfile/ManageFreeLancerProfile";

function ManageProfile() {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.authReducer.userDetails);
    const [openDialog, setOpenDialog] = useState(null);

    const getUserDetails = () => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                res.data?.is_profile_in_review && setOpenDialog(res.data?.is_profile_in_review);
            }
            else {
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
            }
        }).catch(() => {
            dispatch({ type: 'GET_USER_DETAILS', payload: {} });
        })
    }
    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <>
            {userDetails.user_type === USER_TYPES.CLIENT &&
                <ManageClientProfile openDialog={openDialog} />
            }
            {userDetails.user_type === USER_TYPES.AGENCY &&
                <ManageAgencyProfile openDialog={openDialog} />
            }
            {userDetails.user_type === USER_TYPES.FREELANCER &&
            <ManageFreeLancerProfile openDialog={openDialog}/>
        }
        </>
    )
}
export default ManageProfile;