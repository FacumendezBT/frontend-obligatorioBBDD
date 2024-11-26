import useApi from "../hooks/useApi";

const useTurnosService = () => {
  const { doRequest } = useApi();

  const getTurnos = async () => {
    const response = await doRequest("turnos/", "GET", null, true);
    return response;
  };

  const getTurnoById = async (id) => {
    const response = await doRequest(`turnos/${id}`, "GET", null, true);
    return response;
  };

  const createTurno = async (turno) => {
    const response = await doRequest("turnos/", "POST", turno, true);
    return response;
  };

  const updateTurno = async (turno) => {
    const response = await doRequest("turnos/", "PUT", turno, true);
    return response;
  };

  const deleteTurno = async (id) => {
    const response = await doRequest(`turnos/${id}`, "DELETE", null, true);
    return response;
  };

  return {
    getTurnos,
    getTurnoById,
    createTurno,
    updateTurno,
    deleteTurno,
  };
};

export default useTurnosService;
