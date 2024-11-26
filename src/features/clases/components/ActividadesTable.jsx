import React, { useContext, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
import AddEditDialog from '../../usuarios/components/AddEditDialogActvidad';
import { Box, Button, Stack } from '@mui/material';
import { ActividadesContext } from 'shared/context/ActividadesContext';

const ActividadesTable = ({ actividades }) => {
    const { fetchActividad, editActividad, actividad } = useContext(ActividadesContext);

    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Descripción', key: 'descripcion' },
        { nombre: 'Costo', key: 'costo' },
        { nombre: 'Restricción Edad', key: 'restriccion_edad' },
    ];

    const getRowId = (row) => row.id;

    const handleEdit = () => {
        fetchActividad(selected[0]);
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitEdit = (data) => {
        editActividad(data);
        setOpenEdit(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }} spacing={2}>
                <Button
                    disabled={selected.length !== 1}
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                >
                    Editar Actividad
                </Button>
            </Stack>
            <TableComponent
                columns={columns}
                data={actividades}
                getRowId={getRowId}
                selected={selected}
                setSelected={setSelected}
            />

            <AddEditDialog
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={actividad}
                title="Editar Actividad"
            />
        </Box>
    );
};

export default ActividadesTable;
