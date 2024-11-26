import React, { useContext, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
import AddEditDialogTurnos from './AddEditDialogTurnos';
import { Box, Button, Stack } from '@mui/material';
import { TurnosContext } from 'shared/context/TurnosContext';

const TurnosTable = ({ turnos }) => {
    const { fetchTurnos, fetchTurno, addTurno, editTurno, removeTurno, turno } = useContext(TurnosContext);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState(null);

    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Hora Inicio', key: 'hora_inicio' },
        { nombre: 'Hora Fin', key: 'hora_fin' },
    ];

    const getRowId = (row) => row.id;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchTurno(selected.at(0))
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitAdd = (data) => {
        addTurno(data);
    };

    const handleSubmitEdit = (data) => {
        editTurno(data);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button disabled={!selected || selected.length == 0 || selected.length > 1} variant="contained" color="primary" onClick={handleEdit}>
                    Editar turno
                </Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Añadir turno
                </Button>
            </Stack>
            <TableComponent 
                columns={columns} 
                data={turnos} 
                getRowId={getRowId} 
                selected={selected}
                setSelected={setSelected} 
            />

            <AddEditDialogTurnos
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir turno"
            />

            <AddEditDialogTurnos
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={turno}
                title="Editar turno"
            />
        </Box>
    );
};

export default TurnosTable;
