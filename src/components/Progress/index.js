import React, { useContext } from 'react';
import { LoaderContext } from "../../utils/LoaderContext";
import Backdrop from '@mui/material/Backdrop';
import Loader from 'assets/img/SF_Loader.gif';

const Progress = () => {
    const { isLoaderOpen } = useContext(LoaderContext);
    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }} open={isLoaderOpen}>
                <div className='loader-div' >
                    <img src={Loader} alt='img' />
                </div>
            </Backdrop>
        </>
    );
};
export default React.memo(Progress);