import * as React from 'react';
import Grid from '@mui/material/Grid';
import 'assets/css/allModals.css';
import 'assets/css/add-developer.css';

import tabImage1 from '../assets/img/tab-image1.png';

function FirstTab() { 

  return (
    <>
        <Grid className='tab-box'>
            <div className='tab-count'>
                <span>1</span>
            </div>
            <div className='tab-content'>
                <h5>
                    Developer Details
                </h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
                <div className='tab-image'>
                    <img src={tabImage1} alt='img' />
                </div>
            </div>
        </Grid>
    </>
  );
}

export default FirstTab;
