import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CertificateForm from 'design/CertificateForm';

function CertificationStepperContent() {

    return (
        <>
            <Box component="div" className='addBtn-box'>
                <Button >
                + add Certificate 
                </Button>
            </Box>
            <CertificateForm />
        </>
    );
}
export default CertificationStepperContent;