import React, { useState, useContext } from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Container, Box, Button, Stack } from '@mui/material';
import AddEditDialogAlumnos from './AddEditDialogAlumnos';
import { AlumnosContext } from 'shared/context/AlumnosContext';

const AlumnosTable = ({ alumnos }) => {
  const { addAlumno, editAlumno } = useContext(AlumnosContext);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentAlumno, setCurrentAlumno] = useState(null);

  const columns = [
    { Header: 'CI', key: 'ci' },
    { Header: 'Nombre', key: 'nombre' },
    { Header: 'Apellido', key: 'apellido' },
    { Header: 'Fecha de Nacimiento', key: 'fecha_nacimiento' },
    { Header: 'Teléfono de Contacto', key: 'telefono_contacto' },
    { Header: 'Correo Electrónico', key: 'correo_electronico' },
    {
      Header: 'Acciones',
      key: 'acciones',
      flex: 0.5,
      minWidth: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleEdit(params.row)}
        >
          Editar
        </Button>
      ),
    },
  ];

  const getRowId = (row) => row.ci;

  const handleAdd = () => {
    setOpenAdd(true);
  };

  const handleEdit = (alumno) => {
    setCurrentAlumno(alumno);
    setOpenEdit(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentAlumno(null);
  };

  const handleSubmitAdd = (data) => {
    addAlumno(data);
  };

  const handleSubmitEdit = (data) => {
    editAlumno(data);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Botón Añadir */}
      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Añadir Alumno
        </Button>
      </Stack>

      {/* Tabla */}
      <TableComponent columns={columns} data={alumnos} getRowId={getRowId} />

      {/* Diálogo Añadir */}
      <AddEditDialogAlumnos
        open={openAdd}
        handleClose={handleCloseAdd}
        handleSubmit={handleSubmitAdd}
        title="Añadir Alumno"
      />

      {/* Diálogo Editar */}
      {currentAlumno && (
        <AddEditDialogAlumnos
          open={openEdit}
          handleClose={handleCloseEdit}
          handleSubmit={handleSubmitEdit}
          initialData={currentAlumno}
          title="Editar Alumno"
        />
      )}
    </Box>
  );
};

export default AlumnosTable;
