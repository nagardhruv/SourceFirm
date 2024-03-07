import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ControlledPaginationRounded = (props) => {
    const { totalPages, handlePages, currentPage } = props;
    return (
        <Stack spacing={2} className="pagination-container">
            <Pagination
                count={totalPages}
                page={currentPage || 1 }
                variant="outlined"
                shape="rounded"
                className='pagination-inner'
                renderItem={(item) => (
                    <PaginationItem
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
                onChange={(e, page) => { handlePages(page) }}
            />
        </Stack>
    );
}

export default ControlledPaginationRounded;
