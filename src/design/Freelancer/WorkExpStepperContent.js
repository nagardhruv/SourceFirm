import * as React from 'react';
import WorkHistoryForm from 'design/WorkHistoryForm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function WorkExpStepperContent() {

    return (
        <>
            <Box component="div" className='addBtn-box'>
                <Button >
                + add Work Experience
                </Button>
            </Box>
            <WorkHistoryForm />
        </>
    );
}
export default WorkExpStepperContent;