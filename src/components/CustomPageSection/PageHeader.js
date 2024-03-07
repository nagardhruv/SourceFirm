import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/privacy-policy.css";
import "assets/css/term-condition.css";

const PageHeader = (props) => {
    const {breadCrumbs, current, pageTitle, className} = props
    return (
        <section className={className}>
            <div className='privacy-policy-inner'>
                <Container>
                    <Grid container>
                        <Grid item lg={6}>
                            <Stack spacing={2} className='breadcrumb-div'>
                                <CustomBreadcrumbs current={current} previous={breadCrumbs} />
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid className='banner-header'>
                        <Typography variant='h2'>
                            {pageTitle}
                        </Typography>
                    </Grid>
                </Container>
            </div>
        </section>
    )
}

export default PageHeader