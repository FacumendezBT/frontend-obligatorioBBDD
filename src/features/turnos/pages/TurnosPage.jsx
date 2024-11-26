import React, { useContext , useEffect} from 'react';
import { Container, Typography, LinearProgress } from '@mui/material';
import TurnosTable from '../components/TurnosTable';
import { TurnosContext } from 'shared/context/TurnosContext';

const TurnosPage = () => {
  const { turnos, loading, fetchTurnos } = useContext(TurnosContext);
  

  useEffect(() => {
    fetchTurnos();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        <LinearProgress />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Cargando datos...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4, height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Turnos
      </Typography>
      <TurnosTable turnos={turnos} />
    </Container>
  );
};

export default TurnosPage;
