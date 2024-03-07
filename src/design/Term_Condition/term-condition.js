import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/privacy-policy.css";
import "assets/css/term-condition.css";
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ListItem } from '@mui/material';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
import AdminNavbar from "components/Navbars/AdminNavbar";
import { useScrollspy } from 'utils/Common';

function TermsConditions() {

    const mainPanel = React.useRef(null);

    const breadCrumbs = [{ name: 'home', path: '/home' }];

    const sideMenu = [{ id: "terms_of_services", title: "Terms of Services" },
    { id: "key_terms", title: "Key Terms" },
    { id: "enrollment", title: "Enrollment" },
    { id: "user_registration", title: "User Registration" },
    { id: "age_restriction", title: "Age Restriction" },
    { id: "consent_and_collection_and_use_of_data", title: "Consent and Collection and Use of Data" },
    { id: "third_party_links", title: "Third- Party Links" },
    { id: "privacy_policy_and_service_agreement", title: "Privacy Policy and Service Agreement" },
    { id: "provision_of_the_service", title: "Provision of the Service" },
    { id: "communications", title: "Communications" },
    { id: "payments", title: "Payments" },
    { id: "rights", title: "Rights" },
    { id: "contacting", title: "Contacting" },
    { id: "termination", title: "Termination" }];

    const activeIndex = useScrollspy(sideMenu, 120, "terms_of_services");

    const handleScroll = (id) => {
        const yourHeight = 100;
        const node = document.getElementById(id);
        window.scroll(0, node.offsetTop - yourHeight);
    };

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            let element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location]);

    return (
        <div>
            <div className="">
                <div className="main-panel" ref={mainPanel}>
                    <AdminNavbar />
                    <div className='privacy-policy'>
                        <section className="privacy-policy-section">
                            <div className='privacy-policy-inner'>
                                <Container>
                                    <Grid container>
                                        <Grid item lg={6}>
                                            <Stack spacing={2} className='breadcrumb-div'>
                                                <CustomBreadcrumbs current="terms and conditions" previous={breadCrumbs} />
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Grid className='banner-header'>
                                        <Typography variant='h2'>
                                            Terms and Conditions
                                        </Typography>
                                    </Grid>
                                </Container>
                            </div>
                        </section>

                        <section className='privacy-introduction term-condition'>
                            <div className='introduction-inner'>
                                <Container>
                                    <Grid container>
                                        <Grid item md={3}>
                                            <div className='heading-list mb-2'>
                                                <List className='left-heading-list'>
                                                    {sideMenu.map((menu) => (
                                                        <ListItem key={menu.id}>
                                                            <Link className={(menu.id === activeIndex) ? 'active' : ''}
                                                                onClick={() => handleScroll(menu.id)}>{menu.title}</Link>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </div>
                                        </Grid>
                                        <Grid item md={9}>
                                            <div className="introduction-main-content">
                                                <div className="introduction" id="terms_of_services">
                                                    <Typography variant='h4'>Terms of Services</Typography>
                                                    <Typography variant='body1'>This Agreement is effective from 1st September, 2022.</Typography>
                                                    <Typography variant='body1'>This user agreement describes the terms and conditions which you accept by using our website or our services. We&apos;ve incorporated by reference some linked information.</Typography>
                                                    <Typography variant='body1'>The following Terms of Service, which include the sequestration Policy, IP Policy, and any guideline, policy or content displayed on the Website, are a fairly binding contractual agreement between you(&apos;&apos; User &quot;,&quot; you,&quot;&quot; your&apos;&apos;) and SourceFirms(&quot;Sourcefirms.com&quot;,&quot; we&quot;,&quot; us&quot;)( hereinafter inclusively pertained to as the&quot; Terms of Service&quot;). By visiting or using the services available from the sphere and subdomains of www.sourcefirms.com ( the&apos;&apos; Website&quot;), you agree to be fairly bound by these Terms of Service. We reserve the right to revise these Terms of Service and all linked information from time to time in our sole discretion by streamlining this advertisement or any linked information. Unless someone else handed in a similar modification, the revised terms will take effect when they&apos;re posted.</Typography>
                                                </div>

                                                <div className="introduction" id="key_terms">
                                                    <Typography variant='h4'>Key Terms </Typography>
                                                    <Typography variant='body1'>&quot;Account&quot; means the account associated with your registered email address. </Typography>
                                                    <Typography variant='body1'>&quot;Client&quot; refers to an Agency or Independent Contractor, who needs resources or wants to hire resources through the website. A user may be both a client and a resource under this agreement. </Typography>
                                                    <Typography variant='body1'>&quot;Dispute Resolution Process&quot; means the process to be followed by clients and merchandisers in agreement with the disagreement resolution services. </Typography>
                                                    <Typography variant='body1'>&quot; SourceFirms&quot;, &quot;we&apos;&apos;, &quot;our&apos;&apos;, &quot;company&quot; or&quot; the company”  or &apos;&apos;us”` means SourceFirms. </Typography>
                                                    <Typography variant='body1'>&quot;Verified by SourceFirms&quot; users have been satisfactorily verified under the know your client and Identity Verification Policy. </Typography>
                                                    <Typography variant='body1'>&quot; Inactive Account&quot; means a user account that has not been logged into for a 6 month period, or other period determined by us from time to time. </Typography>
                                                    <Typography variant='body1'>&quot; Intellectual Property Rights&quot; means any and all intellectual property rights, being worldwide and the subject matter of similar rights, including( a) patents, brand, rights in circuit layouts( or analogous rights), registered designs, registered and unrecorded trademarks, and any right to have non-public information kept non-public; and( b) any operation or right to apply for enrollment of any of the rights pertain to in paragraph( a), whether or not similar rights are registered or able of being registered and whether being under any laws, at common law or in equity. </Typography>
                                                    <Typography variant='body1'>&quot;Local Job&quot; or &quot;Local Jobs&quot; means a service we give to match a client  with a Resource in relation to the provision of position specific services. </Typography>
                                                    <Typography variant='body1'>&quot; Job Post&quot; or&quot; Listing&quot; means a job offered or awarded by a client using the website, which may include a design or contest listed by a client , a design awarded by a client  (for illustration through sourcefirms.com), a service bought by a client from a staff, and service awarded by a client to a Resourceas a result of a contest or competition hosted via the website. </Typography>
                                                    <Typography variant='body1'>&quot;Resources&quot; means developers, designers, or a staff that offers and provides services or identifies as resources through the Website. A user may be both a client and a resource under this agreement. </Typography>
                                                    <Typography variant='body1'>&quot;Resources Services&quot; means all services handled by resources. </Typography>
                                                    <Typography variant='body1'>&quot;SourceFirms Services&quot; means all services handed by us to you. </Typography>
                                                    <Typography variant='body1'>&quot;User &quot;,&quot; you&quot; or&quot; your&quot; means an existent who visits or uses the website, including via the API. </Typography>
                                                    <Typography variant='h3'>&quot; User Contract&quot; means : </Typography>
                                                    <List className='term-condition-list'>
                                                        <ListItem><span>1.</span> this user agreement </ListItem>
                                                        <ListItem><span>2.</span> the law of conduct as amended from time to time;  </ListItem>
                                                        <ListItem><span>3.</span>  any other contractual vittles’ accepted by both the Resource and client  uploaded to the website, to the extent not inconsistent with the user agreement and the law of conduct; </ListItem>
                                                        <ListItem><span>4.</span> the design terms as awarded and accepted on the website, to the extent not inconsistent with the user agreement and the law of conduct; and</ListItem>
                                                        <ListItem><span>5.</span> any other material integrated by reference from time to time. </ListItem>
                                                    </List>
                                                    <Typography variant='body1'>&quot;Website&quot; means the websites operated by SourceFirms and available at Sourcefirms.com and any of its indigenous or other disciplines or parcels, and any affiliated SourceFirms service.</Typography>
                                                </div>

                                                <div className="introduction" id="enrollment">
                                                    <Typography variant='h4'>Enrollment</Typography>
                                                    <Typography variant='body1'>Every user is required to subscribe- up on the website for the purpose of penetrating and using the point and the Services (“Signup/ Register/ Registration”) and produce a user account for the use of the point( “ user Account ”) in the following manner.</Typography>
                                                </div>

                                                <div className="introduction" id="user_registration">
                                                    <Typography variant='h4'>User Registration</Typography>
                                                    <Typography variant='body1'>The user may choose to register as a ‘Freelancer ’, ‘Agency’ or ‘Company ’, in agreement with any of the options handed on the Registration runner of the website. Upon Registration, each user may log into the user account on the website, using a username and word chosen by the user at the time of Registration (“Registration Details”).</Typography>
                                                    <Typography variant='body1'>User warrants and acknowledges that the user shall be solely responsible to keep secure the Registration Details demanded to pierce the website. The user acknowledges and agrees that for the purpose of this Agreement, all conduct performed by any person using the Registration Details shall be supposed to have been committed by the user and the user will be liable for the same.</Typography>
                                                    <Typography variant='body1'>Company reserves the right to terminate this agreement at any time if it&apos;s set up that the user has been participating in the enrollment details, or offering access to the website, to any unauthorized user or has been using the word, the website for any illegal or unauthorized purpose.</Typography>
                                                    <Typography variant='body1'>Company reserves the right to refuse to permit any person to register as a User, decline to permit any person to pierce the website, terminate user accounts, and remove or edit content in its sole discretion.</Typography>
                                                </div>

                                                <div className="introduction" id="age_restriction">
                                                    <Typography variant='h4'>Age Restriction</Typography>
                                                    <Typography variant='body1'>You must be at least 18(eighteen) times of age before you can use this website. By using this website, you warrant that you&apos;re at least 18 times of age and you may officially stick on to this Agreement. SourceFirms disclaims and presumes no responsibility for arrears related to age misrepresentation.</Typography>
                                                </div>

                                                <div className="introduction" id="consent_and_collection_and_use_of_data">
                                                    <Typography variant='h4'>Consent and Collection and Use of Data</Typography>
                                                    <Typography variant='body1'>Warrants we watch about the sequestration of our users. Click then to view our sequestration Policy. You understand that by using the Services you assent to the collection, use and exposure of your particular information as set forth in our sequestration Policy, and to have your particular information collected, used, transferred to and reused as described therein. You admit and agree that you&apos;re responsible for carrying all demanded warrants, and for complying with all applicable laws (including sequestration and data protection laws, related to particular information handed to us in connection with your use of the service.</Typography>
                                                    <Typography variant='body1'>Third Party Services Please be apprehensive that third parties, including social media platforms or other company websites that we link to online or from our web spots and operations are responsible for their own sequestration practices. Be sure to read the sequestration programs, supplemental notices, and settings of all websites or platforms that you visit so you can understand their sequestration practices and your options.</Typography>
                                                    <Typography variant='body1'>Sensitive Particular Information You agree not to give any other sensitive particular Information. You fete that any data storehouse functionality of the services isn&apos;t intended for the storehouse of medical information, health insurance information, sensitive data about particular characteristics or other particular data that may pose a threat of detriment to the existent if inaptly bared ( inclusively,&quot; Sensitive particular Information&quot;). You agree that we&apos;ve no responsibility or liability with respect to any similar Sensitive particular Information that&apos;s reused, transmitted, bared, or stored in connection with the Service.</Typography>
                                                </div>

                                                <div className="introduction" id="third_party_links">
                                                    <Typography variant='h4'>Third- Party Links</Typography>
                                                    <Typography variant='body1'>SourceFirms may give/ include links and hyperlinks of third party websites for the purpose of announcements either physically or through electronic means throughout the use of the website and operation. The table of similar third party external spots doesn&apos;t indicate countersign of similar spots by SourceFirms.</Typography>
                                                    <Typography variant='body1'>SourceFirms doesn&apos;t make any representations concerning the vacuity and performance of any of the external spots which could be handled. SourceFirms isn&apos;t responsible for the content, terms of use, sequestration programs and practices of similar third party websites services.</Typography>

                                                </div>

                                                <div className="introduction" id="privacy_policy_and_service_agreement">
                                                    <Typography variant='h4'>Privacy Policy and Service Agreement</Typography>
                                                    <Typography variant='body1'>The Company&apos;s sequestration Policy is available atwww.sourcefirms.com/privacy (“Privacy Policy”). By registering or using the point and/ or the Services, or furnishing the company with any Personal Data, the user agrees and acknowledges that the user has read the sequestration Policy and agrees to its terms.</Typography>
                                                    <Typography variant='body1'>The service agreement, which will govern the terms of the trade of the service between the companies, agencies and freelancers, is available at (“Service Agreement”). By submitting a design, or choosing a named design the companies, agencies, and the client agree and admit that they&apos;ve read the Purchase Agreement and agree to its terms. </Typography>
                                                </div>

                                                <div className="introduction" id="provision_of_the_service">
                                                    <Typography variant='h4'>Provision of the Service</Typography>
                                                    <Typography variant='h6'>The company shall in its discretion</Typography>
                                                    <List className='provision-list'>
                                                        <ListItem> give user with access to the website </ListItem>
                                                        <ListItem> permit and give a platform for agencies and companies to submit their conditions on the website permit and give a platform for freelancers and developers to give service through the website </ListItem>
                                                        <ListItem> Give any other services as handed on the point. </ListItem>
                                                    </List>
                                                    <Typography variant='body1'>Users are completely responsible and liable for the access and use of the services and the point.</Typography>
                                                </div>

                                                <div className="introduction" id="communications">
                                                    <Typography variant='h4'>Communications</Typography>
                                                    <Typography variant='body1'>Users acknowledge and agree that the company may send various communications (directly or indirectly via third parties) to the users as part of the service.</Typography>
                                                    <Typography variant='body1'>The User’s acceptance of this agreement deems acceptance and agreement to admit communications from the company (directly or via their merchandisers).</Typography>
                                                </div>

                                                <div className="introduction" id="payments">
                                                    <Typography variant='h4'>Payments</Typography>
                                                    <Typography variant='body1'>SourceFirms is a platform for staff augmented service where clients, agencies and independent contractors connect with resources for their software development requirements. We, particularly, have packages for the clients to post job requirements. Being a platform for connecting clients with resources, SourceFirms is not reliable for payments for work completed. So, resources need to discuss and clarify all payment issues before signing the contract with clients. </Typography>
                                                </div>

                                                <div className="introduction" id="rights">
                                                    <Typography variant='h4'>Rights</Typography>
                                                    <Typography variant='body1'>Clients are granted all rights for the delivered work once payment has been made.</Typography>
                                                </div>

                                                <div className="introduction" id="contacting">
                                                    <Typography variant='h4'>Contacting</Typography>
                                                    <Typography variant='body1'>For purposes of service dispatches, notices, offers and news about SourceFirms, users admit cautions on certain runners and emails to the dispatch addresses associated with their accounts. If you do not want to receive newsletters, announcements, or other communications and/or services from our website, please do not opt-in for those communications or services at the time of registration. Simply follow the unsubscribe process or directions handed in these emails. For the orderly operation of the platform, users can not conclude- out from Essential emails similar as when entering a tab or when a client  requests a refund.</Typography>
                                                </div>

                                                <div className="introduction" id="termination">
                                                    <Typography variant='h4'>Termination</Typography>
                                                    <Typography variant='body1'>Still, SourceFirms have rights to terminate or suspend your access incontinently, without previous notice or liability, if you transgress the defined Terms of Service. Your right to use the service will cease incontinently upon termination.</Typography>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TermsConditions