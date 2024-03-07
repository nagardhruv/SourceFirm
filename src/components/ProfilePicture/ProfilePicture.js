import React from 'react';
import cameraIcon from 'assets/img/icons/camera-icon.svg';
import agencyIcon from 'assets/img/icons/agency-icon-white.svg';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { FILETYPE } from "utils/constant";
import userIcon from 'assets/img/icons/user.svg';
import clientIcon from 'assets/img/icons/client-icon-white.svg';
import 'assets/css/profile.css';
import { USER_TYPES } from 'utils/constant';

export default function ProfilePicture(props) {
    const { userDetails, files, uploadProfileImage, type } = props;

    const handleLogo = () => {
        return userDetails?.user_type === USER_TYPES.CLIENT ? clientIcon : agencyIcon;
    }

    const circle = (
        <Box component="span" className={userDetails?.profile_image ? 'user' : 'user defaultImg'}>
            <img src={userDetails?.profile_image?.url ?? userDetails?.profile_image ?? handleLogo()} alt='img' />
        </Box>
    );
    const addCircle = (
        <Box component="span" className="profileEditBox">
            <img src={files?.profile?.url ? files?.profile?.url : (files?.profile ? files?.profile : userIcon)} className={(files?.profile?.url || files?.profile) ? "user" : "default"} alt='img' />
        </Box>
    )
    const editImage = (
        <label htmlFor="icon-button-file">
            <Input inputProps={{ accept: FILETYPE.image, type: (userDetails?.is_profile_image_in_review) ? "" : "file" }} name="profile_image" id="icon-button-file" onChange={uploadProfileImage} />
            <IconButton disabled={userDetails?.is_profile_image_in_review} aria-label="upload picture" component="span">
                <img src={cameraIcon} alt='img' />
            </IconButton>
        </label>
    );
    return (
        <Badge color="secondary" overlap="circular" className='profileBadge my_profileBadge' badgeContent={editImage}>
            {type ? addCircle : circle}
        </Badge>
    )
}
