import React, { createContext, useState } from 'react';
import useReportesService from '../services/ReportesService';
import { toast } from 'react-toastify';

export const ReportesContext = createContext();

export const ReportesProvider = ({ children }) => {
  const [actividadesIngresos, setActividadesIngresos] = useState([]);
  const [actividadesAlumnos, setActividadesAlumnos] = useState([]);
  const [turnosClases, setTurnosClases] = useState([]);

  const [loading, setLoading] = useState(false);

  const {
    getActividadesMasIngresos,
    getActividadesMasAlumnos,
    getTurnosMasClases,
  } = useReportesService();

  const fetchReportes = async () => {
    setLoading(true);
    try {
      const ingresosData = await getActividadesMasIngresos();
      setActividadesIngresos(ingresosData.data);

      const alumnosData = await getActividadesMasAlumnos();
      setActividadesAlumnos(alumnosData.data);

      const turnosData = await getTurnosMasClases();
      setTurnosClases(turnosData.data);

      toast.success("Reportes cargados exitosamente");
    } catch (error) {
      toast.error("Error al cargar los reportes");
    } finally {
      setLoading(false);
    }
  };

  const fetchActividadesIngresos = async () => {
    setLoading(true);
    try {
      const ingresosData = await getActividadesMasIngresos();
      setActividadesIngresos(ingresosData.data);
    } catch (error) {
      toast.error("Error al cargar el reporte de ingresos");
    } finally {
      setLoading(false);
    }
  };

  const fetchActividadesAlumnos = async () => {
    setLoading(true);
    try {
      const alumnosData = await getActividadesMasAlumnos();
      setActividadesAlumnos(alumnosData.data);
    } catch (error) {
      toast.error("Error al cargar el reporte de actividades con más alumnos");
    } finally {
      setLoading(false);
    }
  };

  const fetchTurnosClases = async () => {
    setLoading(true);
    try {
      const turnosData = await getTurnosMasClases();
      setTurnosClases(turnosData.data);
    } catch (error) {
      toast.error("Error al cargar el reporte de turnos con más clases");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReportesContext.Provider
      value={{
        actividadesIngresos,
        actividadesAlumnos,
        turnosClases,
        loading,
        fetchReportes,
        fetchActividadesIngresos,
        fetchActividadesAlumnos,
        fetchTurnosClases,
      }}
    >
      {children}
    </ReportesContext.Provider>
  );
};
