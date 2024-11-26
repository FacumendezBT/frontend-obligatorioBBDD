import React, { useContext, useEffect } from 'react';
import { Container, Typography, LinearProgress, Box } from '@mui/material';
import TabsComponent from 'shared/components/TabsComponent';
import { EquipamientoContext } from 'shared/context/EquipamientoContext';
import { ActividadesContext } from 'shared/context/ActividadesContext';
import EquipamientoTable from '../compoonents/EquipamientoTable';

const EquipamientoPage = () => {
  const { equipamiento, fetchEquipamiento, loading: loadingEquipamiento } = useContext(EquipamientoContext);
  const { actividades, fetchActividades, loading: loadingActividades } = useContext(ActividadesContext);

  useEffect(() => {
    fetchEquipamiento();
    fetchActividades();
  }, []);

  if (loadingEquipamiento || loadingActividades) {
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
      label: 'Equipamiento',
      content: <EquipamientoTable equipamiento={equipamiento} />,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4, height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Equipamiento
      </Typography>
      <TabsComponent tabs={tabs} />
    </Container>
  );
};

export default EquipamientoPage;
