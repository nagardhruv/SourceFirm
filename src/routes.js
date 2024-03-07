import Dashboard from "views/Dashboard";
// import Profile from "views/Profile/Profile";
// import ManageProfile from "views/Profile/ManageProfile";
// import ManageDevelopers from "views/ManageDevelopers/ManageDevelopers";
// import DeveloperProfilePage from "views/ManageDevelopers/DeveloperProfilePage";
// import AddDeveloper from "views/ManageDevelopers/AddDeveloper";
// import EditDeveloper from "views/ManageDevelopers/EditDeveloper"
// import ManageBankDetails from "views/ClientProfile/ManageBankDetails";
// import PersonalDetail from "views/FreelancerProfile/PersonalDetail";
// import EditProject from "views/FreelancerProfile/component/EditProject";
// import ProfessionalDetail from "views/FreelancerProfile/ProfessionalDetail";
// import ProfilePage from "views/FreelancerProfile/component/ProfilePage";
// import Certification from "views/FreelancerProfile/Certification";
// import WorkExpeirence from "views/FreelancerProfile/WorkExpeirence";
// import EditDeveloperProject from "views/ManageDevelopers/EditDeveloperProject"
// import EditDeveloperCertificates from "views/ManageDevelopers/EditDeveloperCertificates"
// import DeveloperPersonalDetails from "views/ManageDevelopers/DeveloperPersonalDetails"
// import UserDashboard from "views/UserDashboards/UserDashboard";
// import CandidateProfile from "views/UserDashboards/ClientDashboard/CandidateProfile";
// import Chat from "views/Chat/Chat";
// import JobPost from "views/Jobpost/JobPost";
// import ManageJobPost from 'views/Jobpost/ManageJobPost';
// import JobPostDetail from "views/Jobpost/JobPostDetail";
// import JobpostCandidateProfile from "views/Jobpost/component/JobpostCandidateProfile";
// import CandidateRequests from "views/Jobpost/CandidateRequests/Requests";
// import Proposals from "views/Jobpost/Proposals/Proposals";
// import RequestDetail from "views/Jobpost/component/RequestDetail";
// import DeveloperRequests from "views/Jobpost/CandidateRequests/Agency/DeveloperRequests";
// import AgencyProposal from "views/Jobpost/Proposals/Agency/AgencyProposal";
// import DeveloperProposals from "views/Jobpost/Proposals/Agency/DeveloperProposal";
import PageNotFound from "views/PageNotFound";
// import ProposalDetail from "views/Jobpost/component/ProposalDetail";

const dashboardRoutes = [
    {
        path: "/home",
        name: "Home",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin",
        permitted: ['AGENCY', 'CLIENT', 'FREELANCER']

    },
    // {
    //     path: "/my-profile",
    //     name: "My Profile",
    //     icon: "nc-icon nc-circle-09",
    //     component: Profile,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT', 'FREELANCER']
    // },
    // {
    //     path: "/manage-bank-details",
    //     name: "Add Bank Details",
    //     icon: "nc-icon nc-circle-09",
    //     component: ManageBankDetails,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-profile/add",
    //     name: "Add Profile Details",
    //     icon: "nc-icon nc-circle-09",
    //     component: ManageProfile,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT', 'FREELANCER']
    // },
    // {
    //     path: "/my-profile/edit",
    //     name: "Edit Profile Details",
    //     icon: "nc-icon nc-circle-09",
    //     component: ManageProfile,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT', 'FREELANCER']
    // },
    // {
    //     path: "/manage-developers/add",
    //     name: "Add Developer",
    //     icon: "nc-icon nc-circle-09",
    //     component: AddDeveloper,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/manage-developers/edit/:agencyDeveloperId",
    //     name: "Add Developer",
    //     icon: "nc-icon nc-circle-09",
    //     component: EditDeveloper,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/manage-developers/:agencyDeveloperId/edit-projects",
    //     name: "Edit Projects",
    //     icon: "nc-icon nc-circle-09",
    //     component: EditDeveloperProject,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/manage-developers/:agencyDeveloperId/edit-certification",
    //     name: "Edit Projects",
    //     icon: "nc-icon nc-circle-09",
    //     component: EditDeveloperCertificates,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/manage-developers",
    //     name: "Add Developer",
    //     icon: "nc-icon nc-circle-09",
    //     component: ManageDevelopers,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/developer-profile/:agencyDeveloperId",
    //     name: "Profile Developer",
    //     icon: "nc-icon nc-circle-09",
    //     component: DeveloperProfilePage,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/developer-profile/:agencyDeveloperId/personal-details",
    //     name: "Add Developer",
    //     icon: "nc-icon nc-circle-09",
    //     component: DeveloperPersonalDetails,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },

    // //Freelancer Routes
    // {
    //     path: "/my-profile-personal-details",
    //     name: "Freelancer Profile",
    //     icon: "nc-icon nc-circle-09",
    //     component: PersonalDetail,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // },
    // {
    //     path: "/freelancer-profile/edit-professional-details",
    //     name: "Freelancer Project",
    //     icon: "nc-icon nc-circle-09",
    //     component: ProfessionalDetail,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // },
    // {
    //     path: "/freelancer-profile/edit-certification",
    //     name: "Freelancer Project",
    //     icon: "nc-icon nc-circle-09",
    //     component: Certification,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // },
    // {
    //     path: "/freelancer-profile/edit-workexpeirence",
    //     name: "Freelancer Project",
    //     icon: "nc-icon nc-circle-09",
    //     component: WorkExpeirence,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // },
    // {
    //     path: "/freelancer-profile/edit-projects",
    //     name: "Freelancer Project",
    //     icon: "nc-icon nc-circle-09",
    //     component: EditProject,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // },
    // {
    //     path: "/freelancer-profile/profilepage",
    //     name: "Freelancer Project",
    //     icon: "nc-icon nc-circle-09",
    //     component: ProfilePage,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    // }, 
    // // client dashboard path for designing purpose only
    // // {
    // //     path: "/user-dashboard",
    // //     name: "User Dashboard",
    // //     icon: "nc-icon nc-circle-09",
    // //     component: UserDashboard,
    // //     layout: "/admin",
    // //     permitted: ['CLIENT']
    // // },
    // {
    //     path: "/candidate-profile/:candidateId",
    //     name: "Developer Profile",
    //     icon: "nc-icon nc-circle-09",
    //     component: CandidateProfile,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // // Chat path for designing purpose only
    // {
    //     path: "/chat/:roomId",
    //     name: "Chat",
    //     icon: "nc-icon nc-circle-09",
    //     component: Chat,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT','FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/chat",
    //     name: "Chat",
    //     icon: "nc-icon nc-circle-09",
    //     component: Chat,
    //     layout: "/admin",
    //     permitted: ['AGENCY', 'CLIENT','FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/create-job",
    //     name: "Create Job",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobPost,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },

    // {
    //     path: "/manage-job-posts",
    //     name: "Manage Job Posts",
    //     icon: "nc-icon nc-circle-09",
    //     component: ManageJobPost,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },

    // {
    //     path: "/job-post-detail/:jobPostId",
    //     name: "Job Post Detail",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobPostDetail,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/job-post/:jobPostId/candidate/:proposalId",
    //     name: "Job Post Candidate Profile",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobpostCandidateProfile,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-proposals",
    //     name: "Proposals",
    //     icon: "nc-icon nc-circle-09",
    //     component: Proposals,
    //     layout: "/admin",
    //     permitted: ['CLIENT', 'AGENCY', 'FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-proposals/:proposalId",
    //     name: "Proposals",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobpostCandidateProfile,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-proposals/:requestDetailId",
    //     name: "Proposals",
    //     icon: "nc-icon nc-circle-09",
    //     component: ProposalDetail,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/proposals",
    //     name: "Proposals",
    //     icon: "nc-icon nc-circle-09",
    //     component: AgencyProposal,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/proposals/:developerId",
    //     name: "Proposals",
    //     icon: "nc-icon nc-circle-09",
    //     component: DeveloperProposals,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/requests",
    //     name: "Requests",
    //     icon: "nc-icon nc-circle-09",
    //     component: CandidateRequests,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/requests/:requestedDeveloperId",
    //     name: "Requests",
    //     icon: "nc-icon nc-circle-09",
    //     component: DeveloperRequests,
    //     layout: "/admin",
    //     permitted: ['AGENCY'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/requests/:requestedDeveloperId/detail/:requestDetailId",
    //     name: "Request Detail",
    //     icon: "nc-icon nc-circle-09",
    //     component: RequestDetail,
    //     layout: "/admin",
    //     permitted: ['CLIENT', 'AGENCY', 'FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/proposals/:requestedDeveloperId/detail/:requestDetailId",
    //     name: "Request Detail",
    //     icon: "nc-icon nc-circle-09",
    //     component: ProposalDetail,
    //     layout: "/admin",
    //     permitted: ['CLIENT', 'AGENCY', 'FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },

    // {
    //     path: "/edit-job/:jobId",
    //     name: "Edit Job",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobPost,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-requests",
    //     name: "Job Request",
    //     icon: "nc-icon nc-circle-09",
    //     component: CandidateRequests,
    //     layout: "/admin",
    //     permitted: ['CLIENT', 'FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-requests/:proposalId",
    //     name: "Client Request",
    //     icon: "nc-icon nc-circle-09",
    //     component: JobpostCandidateProfile,
    //     layout: "/admin",
    //     permitted: ['CLIENT'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    // {
    //     path: "/my-requests/:requestDetailId",
    //     name: "Freelancer Requests",
    //     icon: "nc-icon nc-circle-09",
    //     component: RequestDetail,
    //     layout: "/admin",
    //     permitted: ['FREELANCER'],
    //     keysCheck: new Map([['is_new_registered', false]])
    // },
    {
        path: "*",
        name: "Page Not Found",
        icon: "nc-icon nc-circle-09",
        component: PageNotFound,
        layout: "/admin",
        permitted: ['AGENCY', 'CLIENT', 'FREELANCER']
    },

];

export default dashboardRoutes;
