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

const AddEditDialogAlumnos = ({ open, handleClose, handleSubmit, initialData, title }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Campos específicos que deben ser numéricos
    if (['ci'].includes(name)) {
      const parsedValue = Number.parseInt(value, 10);
      setFormData({
        ...formData,
        [name]: value === '' ? '' : isNaN(parsedValue) ? formData[name] : parsedValue,
      });
      return;
    }
  
    // Resto de los campos (texto, correo, etc.)
    setFormData({ ...formData, [name]: value });
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
          {/* Campos específicos */}
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="ci"
              label="CI"
              type="number"
              fullWidth
              variant="outlined"
              value={formData.ci}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="nombre"
              label="Nombre"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="apellido"
              label="Apellido"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.apellido}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="fecha_nacimiento"
              label="Fecha de Nacimiento"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="telefono_contacto"
              label="Teléfono de Contacto"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.telefono_contacto}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              name="correo_electronico"
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.correo_electronico}
              onChange={handleChange}
            />
          </Grid>
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

AddEditDialogAlumnos.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default AddEditDialogAlumnos;
