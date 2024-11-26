import useApi from "../hooks/useApi";

const useReportesService = () => {
  const { doRequest } = useApi();

  const getActividadesMasIngresos = async () => {
    const response = await doRequest("reportes/ingresos", "GET", null, true);
    return response;
  };

  const getActividadesMasAlumnos = async () => {
    const response = await doRequest("reportes/mas_alumnos", "GET", null, true);
    return response;
  };

  const getTurnosMasClases = async () => {
    const response = await doRequest("reportes/turnos_mas_clases", "GET", null, true);
    return response;
  };

  return {
    getActividadesMasIngresos,
    getActividadesMasAlumnos,
    getTurnosMasClases,
  };
};

export default useReportesService;
