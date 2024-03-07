import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import 'assets/css/featureCard.css'
import 'assets/css/developer-profile.css';
import deleteIcon from 'assets/img/icons/delete-icon.svg';

function ProjectCard(props) {
    const { projectList, deleteProject, id } = props;

    return (
        <Card className="project-card">
            <CardContent>
                <Grid className="project-top">
                    <div className="icon-container">
                        <p>PN</p>
                    </div>
                    <div className="project-title">
                        <p className="name">{projectList.title}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton
                            aria-label="delete"
                            size="medium"
                            className="deleteIconBtn cursor-pointer"
                            onClick={() => { deleteProject(id); }}
                        >
                            <img
                                src={deleteIcon}
                                alt="img"
                            />
                        </IconButton>
                    </div>
                </Grid>
                <Grid className='skillset'>
                    <p className='developer-profile-subtitle'>Skills</p>
                    <List className='skillList'>
                        {
                            projectList?.technologies?.map((data, key) => (
                                <ListItem className='skillList-item' key={key}>
                                    <ListItemText
                                        primary={data.title}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default ProjectCard;