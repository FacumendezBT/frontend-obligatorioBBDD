import React from 'react';
import TableComponent from 'shared/components/TableComponent';

const InstructoresTable = ({ instructores }) => {
  const columns = [
    { Header: 'CI', accessor: 'ci' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellido', accessor: 'apellido' },
    { Header: 'Especialidad', accessor: 'especialidad' },
  ];

  return (
    <TableComponent columns={columns} data={instructores} />
  );
};

export default InstructoresTable;
