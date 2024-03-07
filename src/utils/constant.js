import docIcon from "assets/img/icons/doc.svg";
import pdfIcon from "assets/img/icons/pdf.svg";
import partTimeIcon from "assets/img/icons/part-time-icon.svg";
import fullTimeIcon from "assets/img/icons/full-time-icon.svg";
import ManageList1 from "assets/img/icons/manage-list1.svg";
import ManageList2 from "assets/img/icons/manage-list2.svg";
import ManageList3 from "assets/img/icons/manage-list3.svg";
import ManageList4 from "assets/img/icons/manage-list4.svg";
import ManageList5 from "assets/img/icons/manage-list5.svg";
import ManageList11 from "assets/img/icons/manage-list6.svg";
import ManageList6 from "assets/img/icons/manage-list-blue1.svg";
import ManageList7 from "assets/img/icons/manage-list-blue2.svg";
import ManageList8 from "assets/img/icons/manage-list-blue3.svg";
import ManageList9 from "assets/img/icons/manage-list-blue4.svg";
import ManageList10 from "assets/img/icons/manage-list-blue5.svg";
import ManageList12 from "assets/img/icons/manage-list-blue6.svg";

export const STATUS = [
    {
        value: "1",
        label: "Active"
    },
    {
        value: "0",
        label: "In-active"
    }
]
export const USER_TYPES = {
    CLIENT: 3,
    AGENCY: 4,
    FREELANCER: 5,
    TEMPORARY_LOGIN_USER: 7
}
export const getUrl = (key) => {
    switch (key) {
        case 0:
            return { url: "portfolio/", type: "GET_PORTFOLIO", countType: "" }
        case 1:
            return { url: "projects/?page=1&page_size=5", type: "GET_PROJECT", countType: "GET_PROJECT_COUNT" }
        // case 2:
        //     return { url: "work-experience/", type: "GET_WORK_EXPERIENCE" }
        case 2:
            return { url: "certification/?page=1&page_size=5", type: "GET_CERTIFICATE", countType: "GET_CERTIFICATE_COUNT" }
        default:
            break;
    }
}
export const getPanelDetails = (key) => {
    switch (key) {
        case 'panel1':
            return { url: "portfolio/", type: "GET_PORTFOLIO", stateKey: "portFolioList" }
        case 'panel2':
            return { url: "projects/", type: "GET_PROJECT", stateKey: "projectList" }
        // case 'panel3':
        //     return { url: "work-experience/", type: "GET_WORK_EXPERIENCE", stateKey: "workExperience" }
        case 'panel3':
            return { url: "certification/", type: "GET_CERTIFICATE", stateKey: "certificateList" }
        default:
            break;
    }
}

export const getDeveloperTabDetails = (key, developerId = null) => {
    switch (key) {
        case 0:
            return { getUrl: `agency-user-developer/${developerId}/`, postUrl: `agency-user-developer/`, type: "GET_AGENCY_DEVELOPER_DETAILS", countType: '' }
        case 1:
            return { getUrl: `agency-user-developer/${developerId}/projects/?page=1&page_size=5`, postUrl: `agency-user-developer/${developerId}/projects/`, type: "AGENCY_DEVELOPER_PROJECT_LIST", countType: 'AGENCY_DEVELOPER_PROJECT_COUNT' }
        case 2:
            return { getUrl: `agency-user-developer/${developerId}/certification/?page=1&page_size=5`, postUrl: `agency-user-developer/${developerId}/certification/`, type: "AGENCY_DEVELOPER_CERTIFICATE_LIST", countType: 'AGENCY_DEVELOPER_CERTIFICATE_COUNT' }
        default:
            break;
    }
}

export const getDeveloperTabDetailsForAdd = (key, developerId = null) => {
    switch (key) {
        case 0:
            return { getUrl: `agency-user-developer/${developerId}/`, postUrl: `agency-user-developer/`, type: "GET_AGENCY_DEVELOPER_DETAILS", countType: '' }
        case 1:
            return { getUrl: `agency-user-developer/${developerId}/projects/?page=1&page_size=all`, postUrl: `agency-user-developer/${developerId}/projects/`, type: "AGENCY_DEVELOPER_PROJECT_LIST", countType: 'AGENCY_DEVELOPER_PROJECT_COUNT' }
        case 2:
            return { getUrl: `agency-user-developer/${developerId}/certification/?page=1&page_size=all`, postUrl: `agency-user-developer/${developerId}/certification/`, type: "AGENCY_DEVELOPER_CERTIFICATE_LIST", countType: 'AGENCY_DEVELOPER_CERTIFICATE_COUNT' }
        default:
            break;
    }
}

export const FILES = {
    PROFILE_MAX_SIZE_IN_MB: 2,
    PROJECT_IMAGES_MAX_SIZE_IN_MB: 2,
    CHAT_ATTACHMENT_MAX_SIZE: 10
};

export const FILETYPE = {
    image: ".png,.jpg,.jpeg",
    file: ".docx,.doc,.pdf,.png,.jpg,.jpeg",
    chat_attachment_type: ".docx,.doc,.pdf,.png,.jpg,.jpeg,.svg,.ico,.xlsx,.xls",
    certificate_file_type: ".pdf,.png,.jpg,.jpeg",
}

export const FILE_DIMENSION = {
    height: 15000,
    width: 15000,
}

export const AVAILABILITY = [
    { id: 1, title: 'Part Time', icon: partTimeIcon },
    { id: 2, title: 'Full Time', icon: fullTimeIcon },
];

export const PROFICIENCY_DIVIDER = {
    3: 3,
    2: 1.5,
    1: 1
}

export const PROFICIENCY_TAG = {
    3: "Beginner",
    2: "Average",
    1: "Fluent"
}

export const IMAGES = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];

export const FILE_ICONS = {
    '.doc': docIcon,
    '.docx': docIcon,
    '.pdf': pdfIcon,
};

export const userTypeContent = [
    {
        type: 3, title: 'Sign up to hire developers on contract',
        subTitle: "Create an account with us to explore how one source can bring multiple agency developers together for you",
        buttonTitle: 'Create my client account'
    },
    {
        type: 4, title: 'Sign up to provide developers on contract',
        subTitle: "Create an account with us and explore infinite work opportunities for your resources. Your one source for the highest optimisation of resource utilization.",
        buttonTitle: 'Create my agency account'
    },
    { type: 5, title: 'Sign up', subTitle: '', buttonTitle: 'Create my freelancer account' }
]
export const JOBPOST_STATUS = [
    {
        id: 0,
        img: ManageList1,
        imgA: ManageList6,
        title: 'All',
    },
    {
        id: 1,
        img: ManageList2,
        imgA: ManageList7,
        title: 'Active',
        class: 'active-btn all-tag-btn'
    },
    {
        id: 2,
        img: ManageList3,
        imgA: ManageList8,
        title: 'Draft',
        class: 'draft-btn all-tag-btn'
    },
    {
        id: 4,
        img: ManageList4,
        imgA: ManageList9,
        title: 'Completed',
        class: 'completed-btn all-tag-btn'
    },
    {
        id: 3,
        img: ManageList5,
        imgA: ManageList10,
        title: 'Expired',
        class: 'expired-btn all-tag-btn'
    },
    {
        id: 5,
        img: ManageList11,
        imgA: ManageList12,
        title: 'Closed',
        class: 'expired-btn all-tag-btn'
    }
];

export const SALARY_TYPE = [
    { id: 1, title: "Hourly", display: "Hour", letter: "H", budget_from: 10, budget_to: 50 },
    { id: 2, title: "Daily", display: "Day", letter: "D", budget_from: 80, budget_to: 400 },
    { id: 3, title: "Weekly", display: "Week", letter: "W", budget_from: 400, budget_to: 2000 },
    { id: 4, title: "Monthly", display: "Month", letter: "M", budget_from: 1600, budget_to: 8000 },
    // { id: 5, title: "Yearly", display: "Year", budget_from: 19200, budget_to: 96000 },
];

export const PAYMENT_PLATFORM = [
    { id: 1, title: "With Website" },
    { id: 0, title: "Without Website" },
];

export const JOBPOST_DATA = {
    title: "",
    description: "",
    positions: null,
    availability: null,
    skills: [],
    technologies: [],
    experience: null,
    salary_type: null,
    budget_from: null,
    budget_to: null,
    payment_platform: null,
}

export const JOBPOST_CANDIDATE_STATUS = {
    SUGGESTED: 1,
    NOT_INTERESTED: 2,
    REQUESTED: 3,
    REQUEST_REJECTED: 4,
    REQUEST_ACCEPTED: 5,
    HIRED: 6,
    OFFER_REJECTED: 7,
    REQUEST_CANCELLED: 8,

}

export const CONTACT_US_USER_TYPES = {
    COMPANY: 1,
    RESOURCE: 2.
}

export const loaderTime = 800;

export const MESSAGE_TYPE = {
    CHAT: 1,
    INTERVIEW: 2,
    OFFER: 3,
    JOBPOST: 4,
}

export const OFFER_STATUS = {
    ACCEPT: 2,
    REJECT: 3,
    COUNTER_OFFER: 4,
}

export const INTERVIEW_STATUS = {
    SCHEDULED: 1,
    RESCHEDULED: 2,
}

export const JOBPOST_STEPS_DATA = {
    1: {
        title: "",
        description: "",
    },
    2: {
        positions: null,
        availability: null,
    },
    3: {
        skills: [],
        technologies: [],
    },
    4: {
        experience: null,
    },
    5: {
        salary_type: null,
        budget_from: null,
        budget_to: null,
        payment_platform: null,
    }




}
