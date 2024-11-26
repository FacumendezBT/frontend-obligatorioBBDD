import React, { useContext, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Container, Box, Button, Stack } from '@mui/material';
import { UsuariosContext } from '../../../shared/context/UsuariosContext';
import AddEditDialog from './AddEditDialogUsuarios';

const UsuariosTable = ({ usuarios }) => {
    const { addUsuario, editUsuario, fetchUsuario, removeUsuario, usuario } = useContext(UsuariosContext)

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const [selected, setSelected] = useState(null);

    const columns = [
        { nombre: 'Correo', key: 'correo' },
        { nombre: 'Administrador', key: 'admin' },
    ];

    const getRowId = (row) => row.correo;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchUsuario(selected.at(0))
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitAdd = (data) => {
        addUsuario(data);
    };

    const handleSubmitEdit = (data) => {
        editUsuario(data);
    };

    const handleKill = () => {
        selected.forEach(id => removeUsuario(id));
    };

    return (
        <Box maxWidth="xl" sx={{ marginTop: 0, px: 0 }}>
            {/* Botones Borrar/Editar/Añadir */}
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button disabled={!selected || selected.length == 0} variant="contained" color="primary" onClick={handleKill}>
                    Eliminar
                </Button>
                <Button disabled={!selected || selected.length == 0 || selected.length > 1} variant="contained" color="primary" onClick={handleEdit}>
                    Editar usuario
                </Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Añadir usuario
                </Button>
            </Stack>

            <TableComponent 
                columns={columns}
                data={usuarios}
                getRowId={getRowId}
                selected={selected}
                setSelected={setSelected}
            />

            <AddEditDialog
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Usuario"
            />

            <AddEditDialog
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={usuario}
                title="Editar Usuario"
            />
        </Box>
    );
};

export default UsuariosTable;
