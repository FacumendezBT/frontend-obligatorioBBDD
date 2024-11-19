import React from 'react';
import TableComponent from 'shared/components/TableComponent';

const AlumnosTable = ({ alumnos }) => {
  const columns = [
    { Header: 'CI', accessor: 'ci' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellido', accessor: 'apellido' },
    { Header: 'Curso', accessor: 'curso' },
  ];

  return (
    <TableComponent columns={columns} data={alumnos} />
  );
};

export default AlumnosTable;
