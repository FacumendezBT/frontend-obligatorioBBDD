import React, { useContext, useEffect } from 'react';
import { Box, Typography, Grid, Container, LinearProgress } from '@mui/material';
import TurnosMasClasesDictadas from '../components/TurnosMasClasesDictadas';
import ActividadesMasIngresosReport from '../components/ActividadesMasIngresosReport';
import ActividadesMasAlumnosReport from '../components/ActividadesMasalumnosReport';
import { ReportesContext } from 'shared/context/ReportesContext';

const ReportsPage = () => {
    const { fetchReportes, loading, actividadesIngresos, actividadesAlumnos, turnosClases} = useContext(ReportesContext);

    useEffect(() => {
        fetchReportes();
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
        <Box maxWidth="xl" sx={{ marginTop: 4, height: '100%', px: 3 }}>
            <Typography variant="h4" gutterBottom>
                Gestión de Reportes
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <TurnosMasClasesDictadas data={turnosClases} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ActividadesMasIngresosReport data={actividadesIngresos} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ActividadesMasAlumnosReport data={actividadesAlumnos} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReportsPage;
