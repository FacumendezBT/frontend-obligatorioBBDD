import React, { createContext, useState } from 'react';
import InstructoresService from '../services/InstructoresService';
import { toast } from 'react-toastify';

export const InstructoresContext = createContext();

export const InstructoresProvider = ({ children }) => {
  const [instructores, setInstructores] = useState([]);
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getInstructores, getInstructorById, createInstructor, updateInstructor, deleteInstructor } = InstructoresService();

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

  const fetchInstructor = async (id) => {
    try {
      const response = await getInstructorById(id);
      setInstructor(response.data);
    } catch (error) {
      toast.error("Error al cargar el instructor");
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

  return (
    <InstructoresContext.Provider 
      value={{ 
        instructores, 
        instructor, 
        fetchInstructores, 
        fetchInstructor, 
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
