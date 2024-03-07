import * as React from 'react';
import Grid from '@mui/material/Grid';
import 'assets/css/allModals.css';
import 'assets/css/add-developer.css';

import tabImage2 from '../assets/img/tab-image2.png';

function SecondTab() { 

  return (
    <>
        <Grid className='tab-box'>
            <div className='tab-count'>
                <span>2</span>
            </div>
            <div className='tab-content'>
                <h5>
                    Developer Projects
                </h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
                <div className='tab-image'>
                    <img src={tabImage2} alt='img' />
                </div>
            </div>
        </Grid>
    </>
  );
}

export default SecondTab;
