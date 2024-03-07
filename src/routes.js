import Dashboard from "views/Dashboard";
import PageNotFound from "views/PageNotFound";

const dashboardRoutes = [
    {
        path: "/home",
        name: "Home",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin",
        permitted: ['AGENCY', 'CLIENT', 'FREELANCER']

    },
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
