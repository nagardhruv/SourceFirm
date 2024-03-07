import React from "react";
import Link from '@mui/material/Link';
import { useScrollspy } from "utils/Common";
import Grid from '@mui/material/Grid';
import "assets/css/privacy-policy.css";
import "assets/css/term-condition.css";
import List from '@mui/material/List';
import { ListItem } from '@mui/material';

const LeftSidebar = (props) => {

    const {sideMenu, activeId} = props;

    const handleScroll = (id) => {
        const yourHeight = 100;
        const node = document.getElementById(id);
        window.scroll(0, node.offsetTop - yourHeight);
    };
    
    const activeIndex = useScrollspy(sideMenu, 120, activeId);

    return (
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
    )
}

export default LeftSidebar