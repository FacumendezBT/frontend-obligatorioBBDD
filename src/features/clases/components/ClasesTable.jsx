import React, { useContext, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
// import AddEditDialogClase from './AddEditDialogClase';
import { Box, Button, Stack } from '@mui/material';
import { ClasesContext } from 'shared/context/ClasesContext';

const ClasesTable = ({ clases }) => {
    const { fetchClases, fetchClase, addClase, editClase, removeClase, clase } = useContext(ClasesContext);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'CI Instructor', key: 'ci_instructor' },
        { nombre: 'ID Actividad', key: 'id_actividad' },
        { nombre: 'ID Turno', key: 'id_turno' },
        { nombre: 'Dictada', key: 'dictada' },
        { nombre: 'Fecha', key: 'fecha' },
    ];

    const getRowId = (row) => row.id;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchClase(selected[0]);
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitAdd = (data) => {
        addClase(data);
        setOpenAdd(false);
    };

    const handleSubmitEdit = (data) => {
        editClase(data);
        setOpenEdit(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button 
                    disabled={selected.length !== 1} 
                    variant="contained" 
                    color="primary" 
                    onClick={handleEdit}
                >
                    Editar Clase
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAdd}
                >
                    Añadir Clase
                </Button>
            </Stack>
            <TableComponent 
                columns={columns} 
                data={clases} 
                getRowId={getRowId} 
                selected={selected}
                setSelected={setSelected} 
            />

            {/* <AddEditDialogClase
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Clase"
            />

            <AddEditDialogClase
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={clase}
                title="Editar Clase"
            /> */}
        </Box>
    );
};

export default ClasesTable;
