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

const TurnosMasClasesDictadas = ({data}) => {
    const { turnosClases } = useContext(ReportesContext);

    const downloadAsTxt = (filename, data) => {
        const element = document.createElement("a");
        const file = new Blob([data], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const generateTurnosTxt = () => {
        let txt = "Reporte de Turnos\n\n";
        turnosClases.forEach((turno, index) => {
            txt += `Turno ${index + 1}:\n`;
            Object.entries(turno).forEach(([key, value]) => {
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
                Los turnos más con más clases dictadas
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Este reporte muestra los turnos con más clases dictadas en la academia.
            </Typography>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Hora de inicio</TableCell>
                            <TableCell>Hora de fin</TableCell>
                            <TableCell>Clases</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {turnosClases.map((turno) => (
                            <TableRow key={turno.id}>
                                <TableCell>{turno.id}</TableCell>
                                <TableCell>{turno.hora_inicio}</TableCell>
                                <TableCell>{turno.hora_fin}</TableCell>
                                <TableCell>{turno.total_clases}</TableCell>
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
                    onClick={() => downloadAsTxt('Reporte_de_Turnos.txt', generateTurnosTxt())}
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

export default TurnosMasClasesDictadas;
