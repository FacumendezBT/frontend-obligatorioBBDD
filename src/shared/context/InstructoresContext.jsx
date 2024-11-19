import React, { createContext, useState, useEffect } from 'react';
import InstructoresService from '../services/InstructoresService';
import { toast } from 'react-toastify';

export const InstructoresContext = createContext();

export const InstructoresProvider = ({ children }) => {
  const [instructores, setInstructores] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getInstructores, createInstructor, updateInstructor, deleteInstructor } = InstructoresService();

  const fetchInstructores = async () => {
    setLoading(true);
    try {
      const response = await getInstructores();
      setInstructores(response.data);
    } catch (error) {
      toast.error("Error al cargar los instructores");
    } finally {
      setLoading(false);
    }
  };

  const addInstructor = async (instructor) => {
    try {
      await createInstructor(instructor);
      toast.success("Instructor creado exitosamente");
      fetchInstructores();
    } catch (error) {
      toast.error("Error al crear el instructor");
    }
  };

  const editInstructor = async (instructor) => {
    try {
      await updateInstructor(instructor);
      toast.success("Instructor actualizado exitosamente");
      fetchInstructores();
    } catch (error) {
      toast.error("Error al actualizar el instructor");
    }
  };

  const removeInstructor = async (ci) => {
    try {
      await deleteInstructor(ci);
      toast.success("Instructor eliminado exitosamente");
      fetchInstructores();
    } catch (error) {
      toast.error("Error al eliminar el instructor");
    }
  };

  useEffect(() => {
    fetchInstructores();
  }, []);

  return (
    <InstructoresContext.Provider 
      value={{ 
        instructores, 
        fetchInstructores, 
        addInstructor, 
        editInstructor, 
        removeInstructor, 
        loading 
      }}
    >
      {children}
    </InstructoresContext.Provider>
  );
};
