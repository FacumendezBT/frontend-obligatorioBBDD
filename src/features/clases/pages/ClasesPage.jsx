import React, { useContext, useEffect } from 'react';
import { Container, Typography, LinearProgress, Box } from '@mui/material';
import TabsComponent from 'shared/components/TabsComponent';
import ClasesTable from '../components/ClasesTable';
import TurnosTable from '../components/TurnosTable';
import ActividadesTable from '../components/ActividadesTable';
import { ClasesContext } from 'shared/context/ClasesContext';
import { TurnosContext } from 'shared/context/TurnosContext';
import { ActividadesContext } from 'shared/context/ActividadesContext';

const ClasesPage = () => {
  const { clases, fetchClases, loading: loadingClases } = useContext(ClasesContext);
  const { turnos, fetchTurnos, loading: loadingTurnos } = useContext(TurnosContext);
  const { actividades, fetchActividades, loading: loadingActividades } = useContext(ActividadesContext);

  useEffect(() => {
    fetchClases();
    fetchTurnos();
    fetchActividades();
  }, []);

  if (loadingClases || loadingTurnos || loadingActividades) {
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
      label: 'Clases',
      content: <ClasesTable clases={clases} />,
    },
    {
      label: 'Turnos',
      content: <TurnosTable turnos={turnos} />,
    },
    {
      label: 'Actividades',
      content: <ActividadesTable actividades={actividades} />,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4, height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Clases
      </Typography>
      <TabsComponent tabs={tabs} />
    </Container>
  );
};

export default ClasesPage;
