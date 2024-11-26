import React, { useState, useContext, useEffect } from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Container, Box, Button, Stack } from '@mui/material';
import AddEditDialog from './AddEditDialogInstructores';
import { InstructoresContext } from 'shared/context/InstructoresContext';

const InstructoresTable = ({ instructores }) => {
    const { addInstructor, editInstructor, fetchInstructor, removeInstructor, instructor } = useContext(InstructoresContext);


    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [selected, setSelected] = useState(null);

    const columns = [
        { nombre: 'CI', key: 'ci' },
        { nombre: 'Nombre', key: 'nombre' },
        { nombre: 'Apellido', key: 'apellido' },
        { nombre: 'Correo Electrónico', key: 'correo_electronico' },
    ];

    const getRowId = (row) => row.ci;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchInstructor(selected.at(0))
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setCurrentInstructor(null);
    };

    const handleSubmitAdd = (data) => {
        addInstructor(data);
    };

    const handleSubmitEdit = (data) => {
        editInstructor(data);
    };

    const handleKill = () => {
        selected.forEach(id => removeInstructor(id));
    };

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Botones Borrar/Editar/Añadir */}
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button disabled={!selected || selected.length == 0} variant="contained" color="primary" onClick={handleKill}>
                    Eliminar
                </Button>
                <Button disabled={!selected || selected.length == 0 || selected.length > 1} variant="contained" color="primary" onClick={handleEdit}>
                    Editar Instructor
                </Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Añadir Instructor
                </Button>
            </Stack>

            <TableComponent
                columns={columns}
                data={instructores}
                getRowId={getRowId}
                selected={selected}
                setSelected={setSelected}
            />

            <AddEditDialog
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Instructor"
            />

            <AddEditDialog
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={instructor}
                title="Editar Instructor"
            />
        </Box>
    );
};

export default InstructoresTable;
