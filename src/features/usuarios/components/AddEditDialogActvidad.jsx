import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Grid,
} from '@mui/material';

const AddEditDialog = ({ open, handleClose, handleSubmit, initialData, title }) => {
    const [formData, setFormData] = useState(initialData || {});

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!isNaN(value)) {
            handleChangeNumber(name, value);
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleChangeNumber = (n, v) => {
        setFormData({ ...formData, [n]: Number.parseInt(v) });
    };

    const onSubmit = () => {
        handleSubmit(formData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} sx={{ marginTop: 1 }}>
                    {Object.keys(initialData || {}).map((key) => (
                        <Grid item xs={12} key={key}>
                            <TextField
                                autoFocus
                                margin="dense"
                                name={key}
                                label={key.replace('_', ' ').toUpperCase()}
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={formData[key] || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                    ))}
                    {!initialData && (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    margin="dense"
                                    name="descripcion"
                                    label="Descripción"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={formData.descripcion || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="dense"
                                    name="costo"
                                    label="Costo"
                                    type="number"
                                    fullWidth
                                    variant="outlined"
                                    value={formData.costo || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="dense"
                                    name="restriccion_edad"
                                    label="Restricción de edad"
                                    type="number"
                                    fullWidth
                                    variant="outlined"
                                    value={formData.restriccion_edad || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant="outlined">
                    Cancelar
                </Button>
                <Button onClick={onSubmit} color="primary" variant="contained">
                    {initialData ? 'Guardar' : 'Añadir'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

AddEditDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object,
    title: PropTypes.string.isRequired,
};

export default AddEditDialog;
