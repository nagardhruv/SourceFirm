import { FILES, FILETYPE, FILE_DIMENSION, FILE_ICONS, JOBPOST_STATUS, SALARY_TYPE, USER_TYPES } from "./constant";
import { toast } from 'react-toastify';
import docIcon from "assets/img/icons/doc.png";
import { parsePhoneNumber } from 'libphonenumber-js';
import { useLayoutEffect, useState } from "react";
import moment from "moment";
import { isPastDate, isToday } from "./Date";

export const getUserStatus = (user, username) => {
    if (user.is_email_verified === false) {
        return { pathname: "/email-verify", state: { email: user?.email || username, isNotShowTryAnotherEmail: true } };
    } else if (user.is_new_registered) {
        return !user.is_profile_in_review ? { pathname: "/my-profile/add", state: null } : { pathname: "/my-profile", state: null }
    } else if (user?.user_type === USER_TYPES.CLIENT) {
        return { pathname: "/manage-job-posts" }
    } else if (user?.user_type === USER_TYPES.AGENCY) {
        return { pathname: "/manage-developers" }
    } else {
        // if (user?.user_type === USER_TYPES.CLIENT && !user.is_new_registered) {
        //     return { pathname: "/user-dashboard" }
        // } else {
        return { pathname: "/" }
        // }
    }
}

export const imageNameFromUrl = (url) => {
    if (!url) return false;
    const arr = url.split('/');
    if (arr.length == 0) return false;
    const index = arr.length - 1;
    return arr[index];
}

export const getAvailability = (avail) => {
    return (!avail) ? '-' : ((avail === 1) ? 'Part Time' : 'Full Time');
}

const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
    const img = new Image()
    img.onload = () => {
        resolve({
            height: img.height,
            width: img.width
        })
    }
    img.src = dataURL
})

const getFileDimension = (file) => {
    try {
        if (file instanceof File) {
            let fileAsDataUrl = URL.createObjectURL(file);
            return getHeightAndWidthFromDataUrl(fileAsDataUrl).then(dimension => dimension);
        } else {
            return null
        }
    } catch (error) {
        return null;
    }
}

export const checkForImageValidations = async (file, whichType, checkForDimesion = false) => {
    try {
        const maxSize = FILES.PROFILE_MAX_SIZE_IN_MB;
        const { height, width } = { ...FILE_DIMENSION };
        const fileTypes = FILETYPE[whichType].split(',');
        const extension = (/[.]/.exec(file.name)) ? '.' + /[^.]+$/.exec(file.name)[0] : undefined;
        //FOR EXTENSION
        if (!extension || !fileTypes.includes(extension)) throw new Error(`${file.name} file is not a valid file please upload from ${FILETYPE[whichType]} files`);
        //FOR FILE SIZE
        if (file.size / 1024 / 1024 > maxSize) throw new Error(`${file.name} file size needs to be less than ${maxSize} MB`);
        //FOR FILE DIMENSION
        if (checkForDimesion) {
            const dimension = await getFileDimension(file);
            if (!dimension) throw new Error('Something went wrong...');
            if (dimension.height > height && dimension.width > width) throw new Error(`The file dimension needs to be ${height} x ${width}`);
        }

        return true;
    } catch (error) {
        return error;
    }
}

export const checkAttachmentsValidations = async (file, checkForDimesion = false, onlyImages) => {
    try {
        let whichType = (checkForDimesion || onlyImages) ? 'image' : 'file';
        const maxSize = FILES.CHAT_ATTACHMENT_MAX_SIZE;
        const { height, width } = { ...FILE_DIMENSION };
        const fileTypes = FILETYPE[whichType].split(',');
        const extension = (/[.]/.exec(file.name)) ? '.' + /[^.]+$/.exec(file.name)[0] : undefined;
        //FOR EXTENSION
        if (!extension || !fileTypes.includes(extension)) throw new Error(`${file.name} file is not a valid file please upload from ${FILETYPE[whichType]} files`);
        //FOR FILE SIZE
        if (file.size / 1024 / 1024 > maxSize) throw new Error(`${file.name} file size needs to be less than ${maxSize} MB`);
        //FOR FILE DIMENSION
        if (checkForDimesion) {
            const dimension = await getFileDimension(file);
            if (!dimension) throw new Error('Something went wrong...');
            if (dimension.height > height && dimension.width > width) throw new Error(`The file dimension needs to be ${height} x ${width}`);
        }

        return true;
    } catch (error) {
        return error;
    }
}

export const getFileExtention = (file) => {
    return (/[.]/.exec(file)) ? '.' + /[^.]+$/.exec(file)[0] : undefined;
}

export const avoidKeysForNumber = (event) => {
    let key = event?.key?.toLowerCase();
    const regex = new RegExp(/(^\d*\.?\d*$)|(backspace|tab|delete|arrowleft|arrowright)/);

    if (key === 'e' || key === '+' || key === '-' || key === 'control' || key === 'v' || !regex.test(key)) {
        event.preventDefault();
    }
}

export const avoidKeysForPlainNumber = (event) => {
    event.target.onpaste = e => e.preventDefault();
    let key = event?.key?.toLowerCase();
    if (key === 'e' || key === '+' || key === '-' || key === '.') {
        event.preventDefault();
    }
}

export const avoidPasting = event => {
    event.target.onpaste = e => e.preventDefault();
}
export const checkFileValidation = async (file) => {
    try {
        const maxSize = FILES.CHAT_ATTACHMENT_MAX_SIZE;
        const fileTypes = FILETYPE['chat_attachment_type'].split(',');
        const extension = (/[.]/.exec(file.name)) ? '.' + /[^.]+$/.exec(file.name)[0] : undefined;
        //FOR FILE EXTENSION
        if (!extension || !fileTypes.includes(extension)) throw new Error(`${file.name} file is not a valid file please upload from ${fileTypes.join(", ")} files`);
        //FOR FILE SIZE
        if (file.size / 1024 / 1024 > maxSize) throw new Error(`${file.name} file size needs to be less than ${maxSize} MB`);
        return true;
    } catch (error) {
        return error;
    }
}

export const errorToast = (response) => {
    if (response?.data.detail) {
        toast.error(response.data.detail);
    } else if (response?.data?.non_field_errors) {
        toast.error(response.data.non_field_errors[0]);
    } else {
        Object.keys(response?.data).forEach((error) => {
            toast.error(response.data[error][0]);
        })
    }
}

export const getFileIcon = (extension) => {
    return FILE_ICONS[extension] ? FILE_ICONS[extension] : docIcon;
}

export const getCountryCode = (phone) => {
    try {
        const phoneNumber = parsePhoneNumber(phone);
        return phoneNumber.country.toLowerCase();
    } catch (error) {
        return "in";
    }
}

export const isValidNumber = (phone) => {
    try {
        const phoneNumber = parsePhoneNumber(phone);
        return phoneNumber.isValid();
    } catch (error) {
        return undefined
    }
}

const clamp = (value) => Math.max(0, value);

const isBetween = (value, floor, ceil) =>
    value >= floor && value <= ceil;

// hooks
export const useScrollspy = (menus, offset, defaultValue) => {
    const [activeId, setActiveId] = useState(defaultValue);

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.pageYOffset;

            const position = menus.map((menu) => {
                const element = document.getElementById(menu.id);

                if (!element) return { id: menu.id, top: -1, bottom: -1 };

                const rect = element.getBoundingClientRect();
                const top = clamp(rect.top + scroll - offset);
                const bottom = clamp(rect.bottom + scroll - offset);

                return { id: menu?.id, top, bottom };
            })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));

            setActiveId(position?.id || defaultValue);
        };

        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
        };
    }, [menus, offset]);

    return activeId;
};

export const findStatusTitle = (statusId) => {
    try {
        let title
        JOBPOST_STATUS.map((jobPost) => {
            if (jobPost.id === statusId) {
                title = jobPost.title
            }
        })
        return title
    } catch (error) {
        return undefined
    }
}

export const findPostStatus = (statusId) => {
    try {
        let status
        JOBPOST_STATUS.map((jobPost) => {
            if (jobPost.id === statusId) {
                status = jobPost.class
            }
        })
        return status
    } catch (error) {
        return undefined
    }
}
export const findSalaryType = (salaryId) => {
    try {
        let salaryType
        SALARY_TYPE.map((salary) => {
            if (salary.id === salaryId) {
                salaryType = salary.display
            }
        })
        return salaryType
    } catch (error) {
        return undefined
    }
}

export const interviewMaxDate = () => {
    return moment().local().add(14, 'd').toDate();
}

export const dispatchContentLoading = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "CONTENT_LOADING", payload: false });
    }, 1000);
}

export const dispatchPageLoading = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "PAGE_LOADING", payload: false });
    }, 1000);
}

export const enablePageLoading = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "PAGE_LOADING", payload: true });
    }, 150);
}

export const getCountryAndPhone = (value, countryCode) => {
    let phoneDetails = { countryCode: 'in', phone: null };
    if (value?.code2) {
        phoneDetails.countryCode = value?.code2?.toLowerCase()
        phoneDetails.phone = value?.phone;
    } else if (countryCode !== 'in') {
        phoneDetails.countryCode = 'in';
    } else {
        phoneDetails.phone = '+91';
    }
    return phoneDetails;
}

export const handleMinTime = (selectedDate = '') => {

    return selectedDate
        ? (isToday(selectedDate))
            ? moment().local().add(1, 'm').toDate()
            : (isPastDate(selectedDate))
                ? moment(selectedDate).local().toDate()
                : null
        : moment().local().add(1, 'm').toDate();
}

export const wrapperJobPostRedirection = (userType, jobPostId, devId, proposalId) => {
    if (userType === USER_TYPES.CLIENT) {
        return `/job-post-detail/${jobPostId}`
    } else {
        return `/proposals/${devId}/detail/${proposalId}`
    }
}

export const wrapperDeveloperRedirection = (userType, devId, proposalId) => {
    if (userType === USER_TYPES.CLIENT) {
        return `/my-proposals/${proposalId}`
    } else {
        return `/developer-profile/${devId}`
    }
}

export const findAmountPerType = (amount, salaryId) => {
    try {
        if (!salaryId || !amount) return '-';
        let salaryType = SALARY_TYPE.find((salary) => salary.id === salaryId)?.display;
        return `$${amount}/${salaryType}`;
    } catch (error) {
        return undefined
    }
}

export const findSingleLetterSalaryType = (salaryId) => {
    try {
        return SALARY_TYPE.find((salary) => salary.id === salaryId)?.letter || "-";
    } catch (error) {
        return undefined
    }
}