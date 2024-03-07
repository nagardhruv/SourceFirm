// store
import { store } from '../store'

export function getToken() {
    const state = store.getState()
    return state.authReducer.user ? state.authReducer.user.token : null
}

export function getUser() {
    const localS = JSON.parse(localStorage.getItem('persist:root'));
    if (localS && localS?.authReducer) {
        return JSON.parse(localS?.authReducer)?.userDetails;
    }

    return null;
}

export function setJobPostData(data, step = null) {
    try {
        if (!step) {
            localStorage.setItem('jobPost', null);
        } else {
            let storedData = JSON.parse(localStorage.getItem('jobPost')) || {};
            storedData[step] = data;
            localStorage.setItem('jobPost', JSON.stringify(storedData));
        }
        return true;
    } catch (error) {
        return false;
    }
}

export function getJobPostData() {
    return JSON.parse(localStorage.getItem('jobPost'));
}