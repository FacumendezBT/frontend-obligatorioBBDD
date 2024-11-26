import React, { useContext } from 'react';
import { 
    Paper, 
    Typography, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Button, 
    Box 
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import { ReportesContext } from 'shared/context/ReportesContext';

const ActividadesMasAlumnosReport = () => {
    const { actividadesAlumnos } = useContext(ReportesContext);

    const downloadAsTxt = (filename, data) => {
        const element = document.createElement("a");
        const file = new Blob([data], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const generateActividadesTxt = () => {
        let txt = "Actividades con más alumnos\n\n";
        actividadesAlumnos.forEach((actividad, index) => {
            txt += `Actividad ${index + 1}:\n`;
            Object.entries(actividad).forEach(([key, value]) => {
                txt += `${key}: ${value}\n`;
            });
            txt += '\n';
        });
        return txt;
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Actividades con más alumnos
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Este reporte muestra las actividades con más alumnos inscritos de la academia.
            </Typography>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Total alumnos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(actividadesAlumnos) && actividadesAlumnos.map((actividad) => (
                            <TableRow key={actividad.id}>
                                <TableCell>{actividad.id}</TableCell>
                                <TableCell>{actividad.descripcion}</TableCell>
                                <TableCell>{actividad.total_alumnos}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<DownloadIcon />}
                    onClick={() => downloadAsTxt('Reporte_de_Actividades.txt', generateActividadesTxt())}
                >
                    Descargar TXT
                </Button>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    startIcon={<PrintIcon />}
                    onClick={handlePrint}
                >
                    Imprimir
                </Button>
            </Box>
        </Paper>
    );
};

export default ActividadesMasAlumnosReport;
