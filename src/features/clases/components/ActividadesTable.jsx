import React, { useContext, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
// import AddEditDialogActividad from './AddEditDialogActividad';
import { Box, Button, Stack } from '@mui/material';
import { ActividadesContext } from 'shared/context/ActividadesContext';

const ActividadesTable = ({ actividades }) => {
    const { fetchActividades, fetchActividad, addActividad, editActividad, removeActividad, actividad } = useContext(ActividadesContext);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Descripción', key: 'descripcion' },
        { nombre: 'Costo', key: 'costo' },
        { nombre: 'Restricción Edad', key: 'restriccion_edad' },
    ];

    const getRowId = (row) => row.id;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchActividad(selected[0]);
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitAdd = (data) => {
        addActividad(data);
        setOpenAdd(false);
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
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAdd}
                >
                    Añadir Actividad
                </Button>
            </Stack>
            <TableComponent 
                columns={columns} 
                data={actividades} 
                getRowId={getRowId} 
                selected={selected}
                setSelected={setSelected} 
            />

            {/* <AddEditDialogActividad
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Actividad"
            />

            <AddEditDialogActividad
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={actividad}
                title="Editar Actividad"
            /> */}
        </Box>
    );
};

export default ActividadesTable;
