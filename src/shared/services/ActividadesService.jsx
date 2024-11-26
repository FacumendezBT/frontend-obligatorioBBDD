import useApi from "../hooks/useApi";

const useActividadesService = () => {
  const { doRequest } = useApi();

  const getActividades = async () => {
    const response = await doRequest("actividades/", "GET", null, true);
    return response;
  };

  const getActividadById = async (id) => {
    const response = await doRequest(`actividades/${id}`, "GET", null, true);
    return response;
  };

  const createActividad = async (actividad) => {
    const response = await doRequest("actividades/", "POST", actividad, true);
    return response;
  };

  const updateActividad = async (actividad) => {
    const response = await doRequest("actividades/", "PUT", actividad, true);
    return response;
  };

  const deleteActividad = async (id) => {
    const response = await doRequest(`actividades/${id}`, "DELETE", null, true);
    return response;
  };

  return {
    getActividades,
    getActividadById,
    createActividad,
    updateActividad,
    deleteActividad,
  };
};

export default useActividadesService;
