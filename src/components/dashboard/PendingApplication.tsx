import { Container, Typography } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const PendingApplication = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: false,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: false,
        },
        {
          field: 'course',
          headerName: 'Course',
          
          editable: false,
        },
        
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', course: "BSCS" },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', course: "BSHM" },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', course: "BSHM" },
        { id: 4, lastName: 'Stark', firstName: 'Arya', course: "BSES" },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', course: "BSMB" },
        { id: 6, lastName: 'Melisandre', firstName: "Hann", course: "CTE" },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', course: "BSOA" },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', course: "BSES" },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', course: "DSHM" },
      ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#CCD3CA",
        borderRadius: 2,
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        
        padding:2
      }}
    >
<Typography>Pending Application</Typography>
<DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
        
    </Container>
  )
}

export default PendingApplication
