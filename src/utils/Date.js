import moment from "moment";

export const isToday = (selectedDate = '') => {
    return selectedDate
        ? moment(selectedDate).local().format('YYYY-MM-DD') === moment().local().format('YYYY-MM-DD')
        : false;
}

export const isPastDate = (selectedDate = '') => {
    return selectedDate
        ? moment(selectedDate).local().isBefore(moment().local(), 'day')
        : false;
}