import useApi from "../hooks/useApi";

const useAlumnosService = () => {
  const { doRequest } = useApi();

  const getAlumnos = async () => {
    const response = await doRequest("alumnos/", "GET", null, true);
    return response;
  };

  const getAlumnoById = async (ci) => {
    const response = await doRequest(`alumnos/${ci}`, "GET", null, true);
    return response;
  };

  const getClasesOfAlumno = async (ci) => {
    const response = await doRequest(`alumnos/${ci}/clases`, "GET", null, true);
    return response;
  };

  const createAlumno = async (alumno) => {
    const response = await doRequest("alumnos/", "POST", alumno, true);
    return response;
  };

  const updateAlumno = async (alumno) => {
    const response = await doRequest("alumnos/", "PUT", alumno, true);
    return response;
  };

  const deleteAlumno = async (ci) => {
    const response = await doRequest(`alumnos/${ci}`, "DELETE", null, true);
    return response;
  };

  return {
    getAlumnos,
    getAlumnoById,
    getClasesOfAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno,
  };
};

export default useAlumnosService;
