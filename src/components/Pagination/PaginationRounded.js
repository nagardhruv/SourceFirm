import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationRounded(props) {
    const { totalPages, handlePages, page } = props;
    return (
        <Stack spacing={2} className="pagination-container">
            <Pagination
                count={totalPages}
                variant="outlined"
                shape="rounded"
                className='pagination-inner'
                renderItem={(item) => (
                    <PaginationItem
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
                onChange={(_e, page) => { handlePages(page) }}
                page={page || 1}
            />
        </Stack>
    );
}
