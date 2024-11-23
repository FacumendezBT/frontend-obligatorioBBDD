import React from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Box } from '@mui/material';

const AlumnosTable = ({ alumnos }) => {
  const columns = [
    { nombre: 'CI', key: 'ci' },
    { nombre: 'Nombre', key: 'nombre' },
    { nombre: 'Apellido', key: 'apellido' },
    { nombre: 'Fecha nacimiento', key: 'fecha_nacimiento' },
    { nombre: 'Teléfono', key: 'telefono_contacto' },
    { nombre: 'Correo electrónico', key: 'correo_electronico' },
  ];

  const getRowId = (row) => row.ci;

  return (
    <Box maxWidth="xl" sx={{ marginTop: 0, px: 0 }}>
      <TableComponent columns={columns} data={alumnos} getRowId={getRowId} />
    </Box>
  );
};

export default AlumnosTable;