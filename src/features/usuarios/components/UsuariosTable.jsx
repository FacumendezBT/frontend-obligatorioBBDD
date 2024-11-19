import React from 'react';
import TableComponent from 'shared/components/TableComponent';

const UsuariosTable = ({ usuarios }) => {
  const columns = [
    { Header: 'Correo', accessor: 'correo' },
    { Header: 'Administrador', accessor: 'admin' },
  ];

  return (
    <TableComponent columns={columns} data={usuarios} />
  );
};

export default UsuariosTable;
