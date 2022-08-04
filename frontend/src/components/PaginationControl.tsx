import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

interface IProps {
    nbHits: number | undefined,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const PaginationControl = ({ nbHits, page, setPage }: IProps) => {

    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Stack spacing={1}>
                <Pagination
                    count={nbHits}
                    page={page}
                    onChange={handleChangePagination} />
            </Stack>
        </>
    );
};

export default PaginationControl;