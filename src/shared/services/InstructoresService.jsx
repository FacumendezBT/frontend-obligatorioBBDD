import useApi from "../hooks/useApi";

const useInstructoresService = () => {
  const { doRequest } = useApi();

  const getInstructores = async () => {
    const response = await doRequest("instructores/", "GET", null, true);
    return response;
  };

  const getInstructorById = async (ci) => {
    const response = await doRequest(`instructores/${ci}`, "GET", null, true);
    return response;
  };

  const createInstructor = async (instructor) => {
    const response = await doRequest("instructores/", "POST", instructor, true);
    return response;
  };

  const updateInstructor = async (instructor) => {
    const response = await doRequest("instructores/", "PUT", instructor, true);
    return response;
  };

  const deleteInstructor = async (ci) => {
    const response = await doRequest(`instructores/${ci}`, "DELETE", null, true);
    return response;
  };

  return {
    getInstructores,
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor,
  };
};

export default useInstructoresService;
