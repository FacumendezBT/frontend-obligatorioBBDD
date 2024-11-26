import React, { createContext, useState, useEffect } from 'react';
import useClasesService from '../services/ClasesService';
import { toast } from 'react-toastify';

export const ClasesContext = createContext();

export const ClasesProvider = ({ children }) => {
    const [clases, setClases] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getClases, createClase, updateClase, deleteClase } = useClasesService();

    const fetchClases = async () => {
        setLoading(true);
        try {
            const response = await getClases();
            setClases(response.data);
        } catch (error) {
            toast.error("Error al cargar las clases");
        } finally {
            setLoading(false);
        }
    };

    const addClase = async (clase) => {
        try {
            await createClase(clase);
            toast.success("Clase creada exitosamente");
            fetchClases();
        } catch (error) {
            toast.error("Error al crear la clase");
        }
    };

    const editClase = async (clase) => {
        try {
            await updateClase(clase);
            toast.success("Clase actualizada exitosamente");
            fetchClases();
        } catch (error) {
            toast.error("Error al actualizar la clase");
        }
    };

    const removeClase = async (id) => {
        try {
            await deleteClase(id);
            toast.success("Clase eliminada exitosamente");
            fetchClases();
        } catch (error) {
            toast.error("Error al eliminar la clase");
        }
    };

    useEffect(() => {
        fetchClases();
    }, []);

    return (
        <ClasesContext.Provider
            value={{
                clases,
                fetchClases,
                addClase,
                editClase,
                removeClase,
                loading,
                setLoading
            }}
        >
            {children}
        </ClasesContext.Provider>
    );
};
