import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "store/actions/index";
import AgencyProfile from 'views/AgencyProfile/AgencyProfile';
import ClientProfilePage from '../ClientProfile/ClientProfile';
import { USER_TYPES } from 'utils/constant';
import FreelancerProfile from "views/FreelancerProfile/FreelancerProfile";
import history from "utils/history";

function Profile() {
    const dispatch = useDispatch();
    const userDeailts = useSelector(state => state.authReducer.userDetails);

    const getUserDetails = () => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                if (res.data.is_new_registered && (!res.data.is_profile_in_review)) {
                    history.push("/my-profile/add");
                }
            }
            else {
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
            }
        }).catch(() => {
            dispatch({ type: 'GET_USER_DETAILS', payload: {} });
        })
    }
    useEffect(() => {
        getUserDetails()
    }, [])


    return (<>
        {userDeailts.user_type === USER_TYPES.CLIENT &&
            <ClientProfilePage />
        }
        {userDeailts.user_type === USER_TYPES.AGENCY &&
            <AgencyProfile />
        }
        {userDeailts.user_type === USER_TYPES.FREELANCER &&
            <FreelancerProfile />
        }
    </>
    )
}
export default Profile;