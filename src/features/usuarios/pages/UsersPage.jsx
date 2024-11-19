import React, { useContext, useEffect } from 'react';
import styles from '../styles/Users.module.css';
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
    return <p>Cargando datos...</p>;
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
    <div className={styles.usersPage}>
      <h1>Gestión de Usuarios</h1>
      <TabsComponent tabs={tabs} />
    </div>
  );
};

export default UsersPage;
