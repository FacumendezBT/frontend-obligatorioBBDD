import React, { createContext, useState, useEffect } from 'react';
import useTurnosService from '../services/TurnosService';
import { toast } from 'react-toastify';

export const TurnosContext = createContext();

export const TurnosProvider = ({ children }) => {
    const [turnos, setTurnos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getTurnos, createTurno, updateTurno, deleteTurno } = useTurnosService();
    
    const fetchTurnos = async () => {
        setLoading(true);
        try {
            const response = await getTurnos();
            response.data.forEach((element) => {
                element.hora_inicio = element.hora_inicio.slice(2, 7).replace("H", "hs");
                element.hora_fin = element.hora_fin.slice(2, 7).replace("H", "hs");
            });
            setTurnos(response.data);
        } catch (error) {
            toast.error("Error al cargar los turnos");
        } finally {
            setLoading(false);
        }
    };

    const addTurno = async (turno) => {
        try {
            await createTurno(turno);
            toast.success("Turno creado exitosamente");
            fetchTurnos();
        } catch (error) {
            toast.error("Error al crear el turno");
        }
    };

    const editTurno = async (turno) => {
        try {
            await updateTurno(turno);
            toast.success("Turno actualizado exitosamente");
            fetchTurnos();
        } catch (error) {
            toast.error("Error al actualizar el turno");
        }
    };

    const removeTurno = async (id) => {
        try {
            await deleteTurno(id);
            toast.success("Turno eliminado exitosamente");
            fetchTurnos();
        } catch (error) {
            toast.error("Error al eliminar el turno");
        }
    };

    useEffect(() => {
        fetchTurnos();
    }, []);

    return (
        <TurnosContext.Provider
            value={{
                turnos,
                fetchTurnos,
                addTurno,
                editTurno,
                removeTurno,
                loading,
            }}
        >
            {children}
        </TurnosContext.Provider>
    );
};
