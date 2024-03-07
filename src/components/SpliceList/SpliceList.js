import React, { useState } from 'react';
import { ListItemText, ListItem, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export const SpliceList = (props) => {
    const { data, mainClass, subClass, limit } = props;
    const [open, setOpen] = useState(false);
    if (Array.isArray(data) && data.length > 0) {
        let tempArray = [];
        let restArray = [];
        const tech = [...data];
        if (tech.length > limit) {
            const technology = tech || [];
            tempArray = technology?.splice(0, limit);
            restArray = technology;
        } else {
            tempArray = [...data]
        }
        const onCounterClick = () => {
            setOpen(true);
        }
        return (
            <>
                {tempArray && tempArray?.map((element) => (
                    <ListItem className={mainClass} key={element.id}>
                        <ListItemText primary={element.title} />
                    </ListItem>
                ))}

                {open === false && restArray?.length >= 1 ?
                    <ListItem className={`${mainClass} ${subClass} cursor-pointer`} onClick={onCounterClick} >
                        <ListItemText primary={'+' + restArray?.length} />
                    </ListItem>
                    :
                    restArray && restArray?.map((element) => (
                        <ListItem className={mainClass} key={element.id}>
                            <ListItemText primary={element.title} />
                        </ListItem>
                    ))}
            </>
        )
    }
    return <Typography variant='p' component='p' className='value'>-</Typography>
}

SpliceList.prototype = {
    data: PropTypes.array,
    mainClass: PropTypes.string,
    subClass: PropTypes.string,
    limit: PropTypes.number,
}