import React, { useContext, useEffect } from 'react';
import { Container, Typography, LinearProgress, Box } from '@mui/material';
import TabsComponent from 'shared/components/TabsComponent';
import InstructoresTable from '../components/InstructoresTable';
import AlumnosTable from '../components/AlumnosTable';
import UsuariosTable from '../components/UsuariosTable';
import { InstructoresContext } from 'shared/context/InstructoresContext';
import { AlumnosContext } from 'shared/context/AlumnosContext';
import { UsuariosContext } from 'shared/context/UsuariosContext';

const UsersPage = () => {
  const { instructores, fetchInstructores, loading: loadingInstructores } = useContext(InstructoresContext);
  const { alumnos, fetchAlumnos, loading: loadingAlumnos } = useContext(AlumnosContext);
  const { usuarios, fetchUsuarios, loading: loadingUsuarios } = useContext(UsuariosContext);

  useEffect(() => {
    fetchInstructores();
    fetchAlumnos();
    fetchUsuarios();
  }, []);

  if (loadingInstructores || loadingAlumnos || loadingUsuarios) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <LinearProgress />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Cargando datos...
        </Typography>
      </Container>
    );
  }

  const tabs = [
    {
      label: 'Instructores',
      content: <InstructoresTable instructores={instructores} />,
    },
    {
      label: 'Alumnos',
      content: <AlumnosTable alumnos={alumnos} />,
    },
    {
      label: 'Usuarios',
      content: <UsuariosTable usuarios={usuarios} />,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4, height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Usuarios
      </Typography>
      <TabsComponent tabs={tabs} />
    </Container>
  );
};

export default UsersPage;
