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

const ActividadesMasIngresosReport = () => {
    const { actividadesIngresos } = useContext(ReportesContext);

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
        let txt = "Actividades que más ingresos generan\n\n";
        actividadesIngresos.forEach((actividad, index) => {
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
                Actividades que más ingresos generan
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Este reporte muestra las actividades que más ingresos generan, sumando el costo del equipamiento.
            </Typography>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Total ingresos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {actividadesIngresos.map((actividad) => (
                            <TableRow key={actividad.id}>
                                <TableCell>{actividad.id}</TableCell>
                                <TableCell>{actividad.descripcion}</TableCell>
                                <TableCell>{actividad.total_ingresos}</TableCell>
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

export default ActividadesMasIngresosReport;
