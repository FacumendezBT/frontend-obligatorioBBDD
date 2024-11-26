import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import EquipamientoService from '../services/EquipamientoService';

export const EquipamientoContext = createContext();

export const EquipamientoProvider = ({ children }) => {
    const [equipamiento, setEquipamiento] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getEquipamiento, createEquipamiento, updateEquipamiento, deleteEquipamiento } = EquipamientoService();

    const fetchEquipamiento = async () => {
        setLoading(true);
        try {
            const response = await getEquipamiento();
            setEquipamiento(response.data);
        } catch (error) {
            toast.error("Error al cargar el equipamiento");
        } finally {
            setLoading(false);
        }
    };

    const addEquipamiento = async (nuevoEquipamiento) => {
        try {
            await createEquipamiento(nuevoEquipamiento);
            toast.success("Equipamiento creado exitosamente");
            fetchEquipamiento();
        } catch (error) {
            toast.error("Error al crear el equipamiento");
        }
    };

    const editEquipamiento = async (equipamientoActualizado) => {
        try {
            await updateEquipamiento(equipamientoActualizado);
            toast.success("Equipamiento actualizado exitosamente");
            fetchEquipamiento();
        } catch (error) {
            toast.error("Error al actualizar el equipamiento");
        }
    };

    const removeEquipamiento = async (id) => {
        try {
            await deleteEquipamiento(id);
            toast.success("Equipamiento eliminado exitosamente");
            fetchEquipamiento();
        } catch (error) {
            toast.error("Error al eliminar el equipamiento");
        }
    };

    useEffect(() => {
        fetchEquipamiento();
    }, []);

    return (
        <EquipamientoContext.Provider
            value={{
                equipamiento,
                fetchEquipamiento,
                addEquipamiento,
                editEquipamiento,
                removeEquipamiento,
                loading,
            }}
        >
            {children}
        </EquipamientoContext.Provider>
    );
};
