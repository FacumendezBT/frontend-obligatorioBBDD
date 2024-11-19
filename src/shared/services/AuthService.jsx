import useApi from "../hooks/useApi";

const useAuthService = () => {
  const { doRequest } = useApi();

  const login = async (email, password) => {
    const response = await doRequest(
      "users/login",
      "POST",
      { correo: email, contrasena: password },
      false
    );
    return response;
  };

  return { login };
};

export default useAuthService;
