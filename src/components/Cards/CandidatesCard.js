import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'assets/css/jobpostdetail.css';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from '@mui/material/Card';
// import TimeIcon1 from 'assets/img/icons/time-icon-blue.svg';
// import ExperianceIcon1 from 'assets/img/icons/exeperiance-icon-blue.svg';
import TimeIcon from 'assets/img/icons/time-icon-grey.svg';
import ExperianceIcon from 'assets/img/icons/exeperiance-icon-grey.svg';
import Button from '@mui/material/Button';
import CheckIcon from 'assets/img/icons/check-icon.svg';
import { SpliceList } from 'components/SpliceList/SpliceList';
import { getAvailability, findSingleLetterSalaryType } from 'utils/Common';
import { JOBPOST_CANDIDATE_STATUS, SALARY_TYPE } from 'utils/constant';
import ConfirmationDialogue from 'components/Dialog/ConfirmationDialogue';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

const CandidatesCard = (props) => {
    const { profile, action, jobPostId, proposalId, proposalStatus, jobPostDetail } = props;
    const [actionDialogue, setActionDialogue] = useState({ open: false, title: 'Are you sure ?', message: "" })
    const [actionData, setActionData] = useState({ status: null, proposalId: null });
    const [processing, setProcessing] = useState(false);
    const [dialogeLoading, setDialogeLoading] = useState(false);

    const openActionDialogue = (message = "", status = null, proposalId = null) => {
        setActionData({ status, proposalId });
        const dialogueData = { ...actionDialogue, open: !actionDialogue.open, message };
        setActionDialogue(dialogueData);
    }
    const closeActionDialogue = () => {
        setActionDialogue({ ...actionDialogue, open: false });
    }
    const candidateRedirection = () => {
        return `/job-post/${jobPostId}/candidate/${proposalId}`
    }

    const handleAction = (status, proposalId, value) => {
        if (value === 'request') {
            setProcessing(true);
        } else {
            setDialogeLoading(true)
        }
        action(status, proposalId).then(() => {
            setProcessing(false);
            setDialogeLoading(false);
            closeActionDialogue();
        }).catch(() => {
            setProcessing(false);
            setDialogeLoading(false);
            actionDialogue?.open && closeActionDialogue();
        });
    }

    const handleExperienceHighlight = (exp) => {
        return (exp < jobPostDetail?.experience?.start || exp > jobPostDetail?.experience?.end) ? "job-list-heading" : "";
    }
    const handleSalaryHighlight = (amount) => {
        const salary = SALARY_TYPE.find(sal => sal.id === jobPostDetail?.salary_type);
        return (amount && (amount < salary.budget_from || amount > salary.budget_to)) ? "job-list-heading" : "";
    }

    return (
        <Grid item lg={4} md={6} sm={6} xs={12}>
            <div className='jobdetail-card'>
                <Card className='candidate-card'>

                    {proposalStatus === JOBPOST_CANDIDATE_STATUS.REQUESTED &&
                        <div className='request-btn'>
                            <img src={CheckIcon} alt='' />
                            <Typography variant='body1'>Requested</Typography>
                        </div>
                    }

                    <div className='card-heading candidate-suggestion cursor-pointer'>
                        <Link href={candidateRedirection()} target="_blank" rel='noopener noreferrer' >
                            <Typography variant='h3'>{profile?.uid}</Typography>
                            <Typography variant='body1'>{profile?.portfolio?.profile_type?.title}</Typography>
                        </Link>

                    </div>
                    {/* <div className='exeperiace-content'>
                            <List>
                                <ListItem>
                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                    <Typography variant='body1'>{profile?.portfolio?.experience}+ Years</Typography>
                                </ListItem>
                                <ListItem>
                                    <img src={TimeIcon} alt="" className='grey-img' />
                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                    <Typography variant='body1'>{getAvailability(profile?.portfolio?.availability)}</Typography>
                                </ListItem>
                            </List>
                        </div> */}
                    <Grid>
                        <List className="categoryList job-detail-main-list">
                            <SpliceList data={profile?.portfolio?.skills} mainClass="subcategoryList-item" subClass="more-subcategory" limit={2} />
                        </List>
                    </Grid>
                    <div className='candidate-text'>
                        <Typography variant='body1 elipse-text' dangerouslySetInnerHTML={{ __html: profile?.portfolio?.description || '' }}>
                        </Typography>
                    </div>
                    <div className='jobpost-position-listing'>
                        <List>
                            <ListItem className={handleExperienceHighlight(profile?.portfolio?.experience)}>
                                <div>
                                    <img src={ExperianceIcon} alt='year-icon' />
                                    <h5>{profile?.portfolio?.experience}+ Years</h5>
                                </div>
                            </ListItem>
                            <ListItem>
                                <div>
                                    <img src={TimeIcon} alt='year-icon' />
                                    <h5>{getAvailability(profile?.portfolio?.availability)}</h5>
                                </div>
                            </ListItem>
                            <ListItem className={handleSalaryHighlight(profile?.portfolio?.amount)}>
                                <div>
                                    <h3>
                                        {profile?.portfolio?.amount
                                            ?
                                            <>
                                                ${profile?.portfolio?.amount} <span>/{findSingleLetterSalaryType(profile?.portfolio?.salary_type)}</span>
                                            </>
                                            :
                                            <span>-</span>}
                                    </h3>
                                </div>
                            </ListItem>
                        </List>
                    </div>
                    <div className='reject-btn'>
                        {proposalStatus === JOBPOST_CANDIDATE_STATUS.REQUESTED ?
                            <Button
                                className='btn-default btn'
                                variant="contained"
                                color="secondary"
                                onClick={() => openActionDialogue("you want to cancel the request", JOBPOST_CANDIDATE_STATUS.SUGGESTED, proposalId)}
                                disabled={processing}
                            >
                                Cancel Request
                            </Button>
                            :
                            <>
                                <Button
                                    className='btn-prymary btn'
                                    variant="contained"
                                    color="primary"
                                    onClick={() => openActionDialogue("you want to reject the developer", JOBPOST_CANDIDATE_STATUS.NOT_INTERESTED, proposalId)}
                                    disabled={processing}
                                >
                                    Reject
                                </Button>

                                <LoadingButton
                                    type="submit"
                                    className={`btn-secondary btn ${processing && 'loading'}`}
                                    loading={processing}
                                    variant="contained"
                                    color="secondary"
                                    loadingIndicator={<CircularProgress color='primary' size={16} />}
                                    onClick={() => handleAction(JOBPOST_CANDIDATE_STATUS.REQUESTED, proposalId, 'request')}
                                    disabled={processing}
                                >
                                    Send Request
                                </LoadingButton>
                            </>
                        }
                    </div>
                </Card>


            </div >

            <ConfirmationDialogue
                open={actionDialogue.open}
                close={closeActionDialogue}
                title={actionDialogue.title}
                message={actionDialogue.message}
                buttonText="Yes"
                processing={dialogeLoading}
                buttonCallback={() => { handleAction(actionData.status, actionData.proposalId); }}
            />
        </Grid >
    )
}

export default CandidatesCard;