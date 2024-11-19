import useApi from "../hooks/useApi";

const useUsuariosService = () => {
  const { doRequest } = useApi();

  const getUsuarios = async () => {
    const response = await doRequest("usuarios/", "GET", null, true);
    return response;
  };

  const getUsuarioByEmail = async (email) => {
    const response = await doRequest(`usuarios/${email}`, "GET", null, true);
    return response;
  };

  const createUsuario = async (usuario) => {
    const response = await doRequest("usuarios/", "POST", usuario, true);
    return response;
  };

  const updateUsuario = async (usuario) => {
    const response = await doRequest("usuarios/", "PUT", usuario, true);
    return response;
  };

  const deleteUsuario = async (email) => {
    const response = await doRequest(`usuarios/${email}`, "DELETE", null, true);
    return response;
  };

  const loginUsuario = async (credentials) => {
    const response = await doRequest("usuarios/login", "POST", credentials, true);
    return response;
  };

  return {
    getUsuarios,
    getUsuarioByEmail,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario,
  };
};

export default useUsuariosService;
