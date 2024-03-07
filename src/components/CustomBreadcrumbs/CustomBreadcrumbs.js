import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "@mui/material/Link";
import 'assets/css/profile.css';
import { useHistory } from "react-router";

export default function CustomBreadcrumbs(props) {
    const { current, previous } = props;
    const history = useHistory();

    const getPath = (elem) => {
        const fixedRedirectionForHome = ['/home'];
        // const fixedRedirectionForProfile = ['/profile'];

        if (fixedRedirectionForHome.includes(elem)) {
            return '/'
        }
        // else if (fixedRedirectionForProfile.includes(elem)) {
        //     return void (0)
        // }
        return elem;
    }

    const upperEach = (string) => {
        return string?.replace(/[&/\\#, +_()$~%.'":*?<>{}-]/g, " ").replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
    }

    const redirectPath = (path) => {
        if(path){
            history.push(path)
        }
    }

    return (
        <Stack spacing={2} className='breadcrumb-div'>
            <Breadcrumbs
                className='breadcrumb-nav'
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {previous.map((elem) => {
                    let path = getPath(elem.path);
                    return (< Link
                        underline="hover"
                        key={elem.name}
                        color="inherit"
                        className="cursor-pointer"
                        onClick={() => redirectPath(path)}
                    >
                        {upperEach(elem.name)}
                    </Link>)
                })}
                <Typography key="4" color="text.primary">
                    {upperEach(current)}
                </Typography>
            </Breadcrumbs>
        </Stack >
    )
}