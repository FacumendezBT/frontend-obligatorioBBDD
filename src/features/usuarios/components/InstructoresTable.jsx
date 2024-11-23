import React, { useState, useContext } from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Container, Box, Button, Stack } from '@mui/material';
import AddEditDialog from './AddEditDialog';
import { InstructoresContext } from 'shared/context/InstructoresContext';

const InstructoresTable = ({ instructores }) => {
  const { addInstructor, editInstructor } = useContext(InstructoresContext);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState(null);

  const columns = [
    { Header: 'CI', key: 'ci' },
    { Header: 'Nombre', key: 'nombre' },
    { Header: 'Apellido', key: 'apellido' },
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

  const handleEdit = (instructor) => {
    setCurrentInstructor(instructor);
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

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Botón Añadir */}
      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Añadir Instructor
        </Button>
      </Stack>

      {/* Tabla */}
      <TableComponent columns={columns} data={instructores} getRowId={getRowId} />

      {/* Diálogo Añadir */}
      <AddEditDialog
        open={openAdd}
        handleClose={handleCloseAdd}
        handleSubmit={handleSubmitAdd}
        title="Añadir Instructor"
      />

      {/* Diálogo Editar */}
      {currentInstructor && (
        <AddEditDialog
          open={openEdit}
          handleClose={handleCloseEdit}
          handleSubmit={handleSubmitEdit}
          initialData={currentInstructor}
          title="Editar Instructor"
        />
      )}
    </Box>
  );
};

export default InstructoresTable;
