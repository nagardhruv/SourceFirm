const metaData = [
    {
        path: '/login',
        pageTitle: "SourceFirms: Hire remote software developers or get hired",
        metaTitle: "Login to the largest community of Clients and Agencies for Software Development.",
        description: "Welcome  to the global marketplace of one of the largest communities of Clients, Agencies, and Independent Contractors for Software Development.",
        url: "https://sourcefirms.com/login"
    },
    {
        path: '/signup',
        pageTitle: "SourceFirms: World's first and fastest marketplace to hire agile software development team",
        metaTitle: "Signup with World's first and fast resource augmentation marketplace for software development needs.",
        description: "Work with top-level agencies across the globe. Get their experienced and talented software development resources on-demand and for long-term contracts",
        url: "https://sourcefirms.com/signup",
    },
    {
        path: '/about-us',
        pageTitle: "SourceFirms: Marketplace of top software development agencies",
        metaTitle: "Top software development agencies at one place",
        description: "One space to find top software development agencies for all technology stacks from remote locations globally",
        url: "https://sourcefirms.com/about-us",
    },
    {
        path: '/',
        pageTitle: "SourceFirms: Remote software developers from global software agencies",
        metaTitle: "Hire remote software developers from top software development agencies globally",
        description: "World's first B2B marketplace to hire remote software developers directly from software development agencies.",
        url: "https://sourcefirms.com/",
    },
    {
        path: '/home',
        pageTitle: "SourceFirms: Remote software developers from global software agencies",
        metaTitle: "Hire remote software developers from top software development agencies globally",
        description: "World's first B2B marketplace to hire remote software developers directly from software development agencies.",
        url: "https://sourcefirms.com/home",
    },
    {
        path: '/contact-us',
        pageTitle: "SourceFirms: Hire top-rated dedicated software development teams",
        metaTitle: "Contact us for top-rated dedicated software development teams hiring",
        description: "Connect with the thriving B2B marketplace for hiring top-rated dedicated software development teams for software development",
        url: "https://sourcefirms.com/contact-us",
    },
    {
        path: '/faq',
        pageTitle: "SourceFirms: Agile software development teams are your finger tips",
        metaTitle: "FAQs for agile software development teams from SourceFirms",
        description: "Answers to all your agile software development teams hiring questions from SourceFirms",
        url: "https://sourcefirms.com/faq",
        questionJsonFile: "MainFAQ.txt"
    },
    {
        path: '/how-it-works/client',
        pageTitle: "SourceFirms: How we help to hire dedicated development team",
        metaTitle: "How we can help to hire Dedicated Development Team with Industry Leading Expertise",
        description: "Details about how we help to hire dedicated team of developers with industry leading expertise to take your project from concept to completion",
        url: "https://sourcefirms.com/how-it-works/client",
        questionJsonFile: "HowItWorksForClient.txt"
    },
    {
        path: '/how-it-works/agency',
        pageTitle: "SourceFirms: How Agencies can get software development projects",
        metaTitle: "How Agencies can get software development projects from global clients through our marketplace",
        description: "A guideline about how agencies can get software development projects from the top global clients as per their flexibility through our marketplace",
        url: "https://sourcefirms.com/how-it-works/agency",
        questionJsonFile: "HowItWorksForAgency.txt"
    },
]
module.exports.getDataByPath = path => metaData.filter(data => data.path == path)?.[0];