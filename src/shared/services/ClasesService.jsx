import useApi from "../hooks/useApi";

const useClasesService = () => {
  const { doRequest } = useApi();

  const getClases = async () => {
    const response = await doRequest("clases/", "GET", null, true);
    return response;
  };

  const getClaseById = async (id) => {
    const response = await doRequest(`clases/${id}`, "GET", null, true);
    return response;
  };

  const createClase = async (clase) => {
    const response = await doRequest("clases/", "POST", clase, true);
    return response;
  };

  const updateClase = async (clase) => {
    const response = await doRequest("clases/", "PUT", clase, true);
    return response;
  };

  const deleteClase = async (id) => {
    const response = await doRequest(`clases/${id}`, "DELETE", null, true);
    return response;
  };

  return {
    getClases,
    getClaseById,
    createClase,
    updateClase,
    deleteClase,
  };
};

export default useClasesService;
