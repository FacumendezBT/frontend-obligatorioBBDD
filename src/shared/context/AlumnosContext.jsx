import React, { createContext, useState, useEffect } from 'react';
import AlumnosService from '../services/AlumnosService';
import { toast } from 'react-toastify';

export const AlumnosContext = createContext();

export const AlumnosProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAlumnos, createAlumno, updateAlumno, deleteAlumno, getClasesOfAlumno } = AlumnosService();

  const fetchAlumnos = async () => {
    setLoading(true);
    try {
      const response = await getAlumnos();
      setAlumnos(response.data);
    } catch (error) {
      toast.error("Error al cargar los alumnos");
    } finally {
      setLoading(false);
    }
  };

  const addAlumno = async (alumno) => {
    try {
      await createAlumno(alumno);
      toast.success("Alumno creado exitosamente");
      fetchAlumnos();
    } catch (error) {
      toast.error("Error al crear el alumno");
    }
  };

  const editAlumno = async (alumno) => {
    try {
      await updateAlumno(alumno);
      toast.success("Alumno actualizado exitosamente");
      fetchAlumnos();
    } catch (error) {
      toast.error("Error al actualizar el alumno");
    }
  };

  const removeAlumno = async (ci) => {
    try {
      await deleteAlumno(ci);
      toast.success("Alumno eliminado exitosamente");
      fetchAlumnos();
    } catch (error) {
      toast.error("Error al eliminar el alumno");
    }
  };

  const fetchClasesOfAlumno = async (ci) => {
    try {
      const response = await getClasesOfAlumno(ci);
      return response.data;
    } catch (error) {
      toast.error("Error al cargar las clases del alumno");
      return [];
    }
  };

  useEffect(() => {
    fetchAlumnos();
  }, []);

  return (
    <AlumnosContext.Provider 
      value={{ 
        alumnos, 
        fetchAlumnos, 
        addAlumno, 
        editAlumno, 
        removeAlumno, 
        fetchClasesOfAlumno, 
        loading 
      }}
    >
      {children}
    </AlumnosContext.Provider>
  );
};