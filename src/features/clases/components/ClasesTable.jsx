import React, { useContext, useEffect, useState } from 'react';
import TableComponent from 'shared/components/TableComponent';
// import AddEditDialogClase from './AddEditDialogClase';
import { Box, Button, Stack } from '@mui/material';
import { ClasesContext } from 'shared/context/ClasesContext';
import { InstructoresContext } from '../../../shared/context/InstructoresContext';
import { ActividadesContext } from '../../../shared/context/ActividadesContext';
import { TurnosContext } from '../../../shared/context/TurnosContext';

const ClasesTable = ({ clases }) => {
    const { fetchClases, fetchClase, addClase, editClase, removeClase, clase } = useContext(ClasesContext);

    const { instructores } = useContext(InstructoresContext)
    const { actividades } = useContext(ActividadesContext)
    const { turnos } = useContext(TurnosContext)

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const [clases_extended, setClasesExt] = useState([]);

    const columns = [
        { nombre: 'ID', key: 'id' },
        { nombre: 'Instructor', key: 'instructor' },
        { nombre: 'Actividad', key: 'actividad' },
        { nombre: 'Turno', key: 'turno' },
        { nombre: 'Dictada', key: 'dictada' },
        { nombre: 'Fecha', key: 'fecha' },
    ];

    const getRowId = (row) => row.id;

    const handleAdd = () => {
        setOpenAdd(true);
    };

    const handleEdit = () => {
        fetchClase(selected[0]);
        setOpenEdit(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleSubmitAdd = (data) => {
        addClase(data);
        setOpenAdd(false);
    };

    const handleSubmitEdit = (data) => {
        editClase(data);
        setOpenEdit(false);
    };

    const fillClases = () => {
        const arr = [];
        if (instructores && actividades && turnos)
            clases.forEach(clase => {
                const instructor = instructores.find(ins => ins.ci === clase.ci_instructor);
                const actividad = actividades.find(act => act.id === clase.id_actividad);
                const turno = turnos.find(tur => tur.id === clase.id_turno);
                arr.push(
                    {
                        id: clase.id,
                        instructor: `${instructor.nombre} ${instructor.apellido}`,
                        actividad: actividad.descripcion,
                        turno: `${turno.hora_inicio}-${turno.hora_fin}`,
                        dictada: clase.dictada ? "Sí" : "No",
                        fecha: clase.fecha
                    }
                )
                setClasesExt(arr)
            });
    };

    useEffect(() => {
        fillClases()
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <Button
                    disabled={selected.length !== 1}
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                >
                    Editar Clase
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAdd}
                >
                    Añadir Clase
                </Button>
            </Stack>
            <TableComponent
                columns={columns}
                data={clases_extended}
                getRowId={getRowId}
                selected={selected}
                setSelected={setSelected}
            />

            {/* <AddEditDialogClase
                open={openAdd}
                handleClose={handleCloseAdd}
                handleSubmit={handleSubmitAdd}
                title="Añadir Clase"
            />

            <AddEditDialogClase
                open={openEdit}
                handleClose={handleCloseEdit}
                handleSubmit={handleSubmitEdit}
                initialData={clase}
                title="Editar Clase"
            /> */}
        </Box>
    );
};

export default ClasesTable;
