import React, { createContext, useState } from 'react';
import UsuariosService from '../services/UsuariosService';
import { toast } from 'react-toastify';

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getUsuarios, createUsuario, updateUsuario, deleteUsuario, loginUsuario } = UsuariosService();

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await getUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      toast.error("Error al cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  const addUsuario = async (usuario) => {
    try {
      await createUsuario(usuario);
      toast.success("Usuario creado exitosamente");
      fetchUsuarios();
    } catch (error) {
      toast.error("Error al crear el usuario");
    }
  };

  const editUsuario = async (usuario) => {
    try {
      await updateUsuario(usuario);
      toast.success("Usuario actualizado exitosamente");
      fetchUsuarios();
    } catch (error) {
      toast.error("Error al actualizar el usuario");
    }
  };

  const removeUsuario = async (email) => {
    try {
      await deleteUsuario(email);
      toast.success("Usuario eliminado exitosamente");
      fetchUsuarios();
    } catch (error) {
      toast.error("Error al eliminar el usuario");
    }
  };

  const login = async (credentials) => {
    try {
      const response = await loginUsuario(credentials);
      toast.success("Inicio de sesión exitoso");
      return response.data;
    } catch (error) {
      toast.error("Credenciales inválidas");
      throw error;
    }
  };

  return (
    <UsuariosContext.Provider 
      value={{ 
        usuarios, 
        fetchUsuarios, 
        addUsuario, 
        editUsuario, 
        removeUsuario, 
        login, 
        loading 
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};
