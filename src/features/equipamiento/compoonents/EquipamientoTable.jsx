import React from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Box, Typography } from '@mui/material';

const EquipamientoTable = ({ equipamiento }) => {
    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Descripción', key: 'descripcion' },
        { nombre: 'ID Actividad', key: 'id_actividad' },
        { nombre: 'Costo', key: 'costo' },
    ];

    const getRowId = (row) => row.id;

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Lista de Equipamiento
            </Typography>

            {/* Tabla de Equipamiento */}
            <TableComponent
                columns={columns}
                data={equipamiento}
                getRowId={getRowId}
                selectable={false} // Sin selección
            />
        </Box>
    );
};

export default EquipamientoTable;
