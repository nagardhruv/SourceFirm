import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "assets/css/featureCard.css";
import "assets/css/developer-profile.css";
import editIcon from "assets/img/icons/edit-icon.svg";
import deleteIcon from "assets/img/icons/delete-icon.svg";
// import { useDispatch, useSelector } from "react-redux";
// import DeleteProjectDialog from "components/Dialog/DeleteProjectDialog";
// import { toast } from "react-toastify";
// import { LoaderContext } from "utils/LoaderContext";
// import * as Actions from "../../../store/actions/index";
// import { getUrl } from "utils/constant";
import Typography from "@mui/material/Typography";
// import history from "utils/history";
import linkIcon from "assets/img/icons/link-icon.svg";
import ProjectDetailsDialog from "components/Dialog/ProjectDetailsDialog";
import DeleteProjectDialog from "design/DeleteProjectDialog";

function ProjectDetailTab() {
  // const { currentTab, getTabDetails } = props;
  // const [anchorEl, setAnchorEl] = useState(null);
  // const userProjectList = useSelector(state => state.freelancerReducer?.projectList);
  // const [projectId, setprojectId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  // const dispatch = useDispatch();
  // const { toggalLoader } = useContext(LoaderContext);
  // const [fileElId, setFileElId] = useState(0);
  // const userDetails = useSelector(state => state.authReducer.userDetails);

  // const handleMenuClick = (event, id) => {
  //     setAnchorEl(event.currentTarget);
  //     setFileElId(id);
  // };
  // const handleMenuClose = () => {
  //     setAnchorEl(null);
  //     setFileElId(0);
  // };
  // const handleOpenDialog = (id) => {
  //     setprojectId(id);
  //     setAnchorEl(null);
  //     setOpenDialog(true);
  // };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  // const handleEditRedirect = async (project) => {
  //     history.push({ pathname: "/freelancer-profile/edit-projects", state: { projectId: project.id } })
  // }
  // const handleConfirmDelete = () => {
  //     setOpenDialog(false);
  //     dispatch(Actions.deleteProject(projectId)).then(response => {
  //         if (response.status === 204) {
  //             toggalLoader(false);
  //             setOpenDialog(false);
  //             toast.success('Project deleted successfully');
  //             getTabDetails(getUrl(currentTab));
  //         } else {
  //             toggalLoader(false);
  //             setOpenDialog(false);
  //             toast.error('Please try again!');
  //         }
  //     })
  // }
  return (
    <>
      <IconButton className="edit-icon editBtn">
        <img src={editIcon} alt="img" />
      </IconButton>
      <Typography className="approval-tag profileInnerApproval-tag">
        Project is under approval
      </Typography>
      <Typography className="count-profileTitle" component="p">
        <span>8</span> Projects
      </Typography>
      <Grid container className="projectsList">
        <Grid item className="projectListItem">
          <Card className="project-card">
            <CardContent>
              <Grid className="project-top">
                <div className="icon-container">
                  <p>AM</p>
                </div>
                <div className="project-title">
                  <p className="name">Amazon</p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    className="deleteIconBtn cursor-pointer"
                  // onClick={() => { deleteProject(id); }}
                  >
                    <img src={deleteIcon} alt="img" />
                  </IconButton>
                </div>
              </Grid>
              <Grid className="about_project">
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard
                </Typography>
              </Grid>
              <Grid className="skillset">
                <p className="developer-profile-subtitle">Skills</p>
                <List className="skillList">
                  <ListItem className="skillList-item">
                    <ListItemText primary="Node" />
                  </ListItem>
                  <ListItem className="skillList-item">
                    <ListItemText primary="java" />
                  </ListItem>
                  <ListItem className="skillList-item">
                    <ListItemText primary="HTML" />
                  </ListItem>
                  <ListItem className="skillList-item">
                    <ListItemText primary="ReactJs" />
                  </ListItem>
                  <ListItem className="skillList-item">
                    <ListItemText primary="NextJs" />
                  </ListItem>
                </List>
              </Grid>
              <Grid className="duration-details">
                <Typography>
                  <span>02 March 2021</span>
                  <span> to </span>
                  <span>18 May 2021</span>
                </Typography>
                <a href="#">
                  <img src={linkIcon} alt="img" />
                </a>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <DeleteProjectDialog
        open={openDialog}
        close={handleCloseDialog}
        // confirm={handleConfirmDelete}
        message="Are you Sure you want to Delete this Project?"
        description="This Action Can’t be Undo, When you delete all data of this Project it will be Eresed our System."
      />
      <ProjectDetailsDialog />
    </>
  );
}

export default ProjectDetailTab;
