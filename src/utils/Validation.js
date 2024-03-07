import moment from "moment";
import { isValidNumber } from "./Common";

const BANK_ACCOUNT_NUMBER_LIMIT = {
    from: 10,
    to: 16,
}

export const normalizePhone = (maxLength) => (value, previousValue) => {
    if (!value) {
        return value;
    }
    if (value.toString().trim().length <= maxLength) {
        return value;
    }
    return previousValue;
};

const URL_REGEX = new RegExp(/^((ftp|http[s]?):\/\/(?:www\.|(?!www))[a-zA-Z0-9]+[a-zA-Z0-9]\.[^\s]{2,})/gi);

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined

export const charOnly = value => value && !/^[A-Za-z]*((\s)*[A-Za-z])*$/i.test(value) ? 'Invalid value' : undefined

export const required = (value) => {
    if (typeof value === 'string') {
        if (!value?.match(/^\w/)) {
            return 'This field is required'
        }
        value = value.trim();
    }
    else if (Array.isArray(value)) {
        value = Object.keys(value).length > 0 ? value : null;
    }
    return value ? undefined : "This field is required";
};
export const company_size_required = (value) => {
    if (typeof value === 'string') {
        value = value.trim();
        return value === "" ? "This field is required" : undefined
    }
    if (value || value >= 0) {
        return undefined
    } else {
        return "This field is required"
    }
    // return value ? undefined : "This field is required";
}

export const requiredWithRegex = (value) => {
    value = value?.replace(/<[^>]+>/g, '');
    if (typeof value === 'string') {
        if (!value?.match(/^\w|[.,\/#!$%\^&\*;:{}<>=\-_`~()]/)) {   /* eslint-disable-line */
            return 'This field is required'
        }
        value = value.trim();
    }
    else if (Array.isArray(value)) {
        value = Object.keys(value).length > 0 ? value : null;
    }
    return value ? undefined : "This field is required";
};

export const checkIsNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const notZero = value => value && value <= 0 ? 'Must be a number' : undefined

export const checkUrl = (value) => {
    return value && (!value.match(URL_REGEX) || value.match(/[\s\*\$]/gi) || value.match(/(\.\w{2,})(\1)/)) /* eslint-disable-line */
        ? 'Invalid url (eg: http://exampleurl)' : undefined;
}

export const numberOnly = value => value && !/^[0-9]+$/i.test(value)
    ? 'Invalid value' : undefined;

export const IFSC = (value) =>
    value && !/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/i.test(value)
        ? "Invalid IFSC code"
        : undefined;

export const minimumDate = (value, allValues) => {
    if (allValues.start_date) {
        if (value <= allValues.start_date && allValues?.end_date) {
            return 'End date cannot less than or equal to the start date';
        }
    }
    return undefined;
};

export const characterLimit = (limit) => (value, previousValue) => {
    if (!value) {
        return value;
    }
    if (value.toString().trim().length <= limit) {
        return value;
    }
    return previousValue;
}

export const trimmed = () => (value) => {
    return value.toString().trim();
}

export const trimSpaceFromStart = (value) => {
    return value.toString().trimStart();
}

export const charLimitWithTrim = (limit) => (value) => {
    if (!value) {
        return value.toString().trimStart();
    }
    if (value.toString().trim().length >= limit) {
        return value.toString().trimStart().substring(0, limit);
    } else {
        return value.toString().trimStart();
    }
}

export const email = (value) => {
    return value.match(EMAIL_REGEX) ? undefined : "Enter a valid e-mail address ";
}

export const registrationNumber = (value) => {
    if (value && !/^[a-z0-9]+$/i.test(value)) {
        return 'Please enter valid registration number'
    }
    return undefined;
}
export const checkExperience = (value) => {
    if (!value && value !== 0) {
        return "This field is requiered";
    } else if (value && !/^[0-9]+$/i.test(value)) {
        return 'Invalid value'
    } else if (value > 50) {
        return 'Experience should be between 0-50'
    }
    return undefined;
}

export const checkPhoneNumber = (value) => {
    if (!value || value == "") return 'This field is required';
    if (value && !isValidNumber(value)) {
        return 'Please enter valid contact number'
    }
    return undefined
}


export const accountNumberLimit = (value) => {
    return (value.length < BANK_ACCOUNT_NUMBER_LIMIT.from || value.length > BANK_ACCOUNT_NUMBER_LIMIT?.to)
        ? "Account number should be in between 10 to 16 digits"
        : undefined;
}
export const maxNumber = (limit) => (value, previousValue) => {
    if (value && parseInt(value) > limit) return previousValue;
    return value;
}
export const minNumber = (limit) => (value, previousValue) => {
    if (value && parseInt(value) < limit) return previousValue;
    return value;
}

export const minAndMaxNumber = (min, max) => (value, previousValue) => {
    if (value && value.length > 2) return previousValue;
    if (value && parseInt(value) < min) return previousValue;
    if (value && parseInt(value) > max) return previousValue;
    return value;
}

export const minInterviewTime = (value) => {
    if (value) {
        const incomingTime = moment(value).local();
        const currentTime = moment().local();
        return incomingTime.isBefore(currentTime) ? 'Please enter valid time' : undefined;
    }
    return undefined;
}

export const checkZeroMonth = (value) => {
    if (value == 0) {
        return 'Month should not be 0'
    }
}