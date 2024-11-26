import React, { useState, useContext } from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Box, Button, Stack } from '@mui/material';
import AddEditDialogAlumnos from './AddEditDialogAlumnos';
import { AlumnosContext } from 'shared/context/AlumnosContext';

const AlumnosTable = ({ alumnos }) => {
    const { addAlumno, editAlumno, fetchAlumno, alumno, removeAlumno } = useContext(AlumnosContext);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const columns = [
        { nombre: 'CI', key: 'ci' },
        { nombre: 'Nombre', key: 'nombre' },
        { nombre: 'Apellido', key: 'apellido' },
        { nombre: 'Correo Electrónico', key: 'correo_electronico' },
        { nombre: 'Teléfono de Contacto', key: 'telefono_contacto' },
        { nombre: 'Fecha de Nacimiento', key: 'fecha_nacimiento' },
    ];

    const getRowId = (row) => row.ci;

    const handleAdd = () => {
        setOpenAdd(true);
    };


  const handleEdit = () => {
    fetchAlumno(selected.at(0));
    setOpenEdit(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleSubmitAdd = (data) => {
    addAlumno(data);
  };

  const handleSubmitEdit = (data) => {
    editAlumno(data);
  };
  const handleKill = () => {
    selected.forEach(id => removeAlumno(id));
};

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }} spacing={2}>
                <Button disabled={!selected || selected.length == 0} variant="contained" color="primary" onClick={handleKill}>
                    Eliminar
                </Button>
                <Button 
                    disabled={!selected || selected.length === 0 || selected.length > 1} 
                    variant="contained" 
                    color="primary" 
                    onClick={handleEdit}>
                    Editar Alumno
                </Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>
                    Añadir Alumno
                </Button>
            </Stack>

            {/* Tabla de Alumnos */}
            <TableComponent
                columns={columns}
                data={alumnos}
                getRowId={getRowId}
                selected={selected}
                setSelected={setSelected}
            />

            {/* Modal para Añadir Alumno */}
            <AddEditDialogAlumnos
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Alumno"
            />

            {/* Modal para Editar Alumno */}
            <AddEditDialogAlumnos
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={alumno}
                title="Editar Alumno"
            />
        </Box>
    );
};

export default AlumnosTable;
