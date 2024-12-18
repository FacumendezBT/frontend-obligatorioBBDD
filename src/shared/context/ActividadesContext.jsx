import React, { createContext, useState, useEffect } from 'react';
import useActividadesService from '../services/ActividadesService';
import { toast } from 'react-toastify';

export const ActividadesContext = createContext();

export const ActividadesProvider = ({ children }) => {
    const [actividades, setActividades] = useState([]);
    const [actividad, setActividad] = useState(null);
    const [loading, setLoading] = useState(true);
    const { getActividades, createActividad, updateActividad, deleteActividad, getActividadById } = useActividadesService();

    const fetchActividades = async () => {
        setLoading(true);
        try {
            const response = await getActividades();
            setActividades(response.data);
        } catch (error) {
            toast.error("Error al cargar las actividades");
        } finally {
            setLoading(false);
        }
    };

    const fetchActividad = async (id) => {
        try {
            const response = await getActividadById(id);
            setActividad(response.data);
        } catch (error) {
            toast.error("Error al cargar las actividades");
        }
    };

    const addActividad = async (actividad) => {
        try {
            await createActividad(actividad);
            toast.success("Actividad creada exitosamente");
            fetchActividades();
        } catch (error) {
            toast.error("Error al crear la actividad");
        }
    };

    const editActividad = async (actividad) => {
        try {
            await updateActividad(actividad);
            toast.success("Actividad actualizada exitosamente");
            fetchActividades();
        } catch (error) {
            toast.error("Error al actualizar la actividad");
        }
    };

    const removeActividad = async (id) => {
        try {
            await deleteActividad(id);
            toast.success("Actividad eliminada exitosamente");
            fetchActividades();
        } catch (error) {
            toast.error("Error al eliminar la actividad");
        }
    };

    useEffect(() => {
        fetchActividades();
    }, []);

    return (
        <ActividadesContext.Provider
            value={{
                actividades,
                actividad,
                fetchActividades,
                fetchActividad,
                addActividad,
                editActividad,
                removeActividad,
                loading,
            }}
        >
            {children}
        </ActividadesContext.Provider>
    );
};
