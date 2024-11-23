import React from 'react';
import TableComponent from 'shared/components/TableComponent';
import { Box } from '@mui/material';

const UsuariosTable = ({ usuarios }) => {
  const columns = [
    { nombre: 'Correo', key: 'correo' },
    { nombre: 'Administrador', key: 'admin' },
  ];

  const getRowId = (row) => row.correo;

  return (
    <Box maxWidth="xl" sx={{ marginTop: 0, px: 0 }}>
      <TableComponent columns={columns} data={usuarios} getRowId={getRowId} />
    </Box>
  );
};

export default UsuariosTable;
