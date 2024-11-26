import React from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Box, Button, Stack } from '@mui/material';

const TurnosTable = ({ turnos }) => {
    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Hora Inicio', key: 'hora_inicio' },
        { nombre: 'Hora Fin', key: 'hora_fin' },
    ];

    const getRowId = (row) => row.id;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button variant="contained" color="primary" onClick={()=>{}}>
                    Añadir turno
                </Button>
            </Stack>
            <TableComponent columns={columns} data={turnos} getRowId={getRowId} />
        </Box>
    );
};

export default TurnosTable;
