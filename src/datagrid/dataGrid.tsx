import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery, gql } from '@apollo/client';
import Avatar from '@mui/material/Avatar';

export const GridData: React.FC = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 270 },
        {
            field: 'photo',
            headerName: 'Image',
            width: 290,
            renderCell: (params) => {
                return (
                    <>
                        <Avatar alt='description' src={params.formattedValue} sx={{ width: 56, height: 56 }} />
                    </>
                );
            }
        }
    ];

    const GET_LOCATIONS = gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `;

    const { loading, error, data: rows } = useQuery(GET_LOCATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows.locations}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>

        
    );
}

