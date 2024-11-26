import useApi from "../hooks/useApi";

const EquipamientoService = () => {
  const { doRequest } = useApi();

  // Obtener todo el equipamiento
  const getEquipamiento = async () => {
    const response = await doRequest("equipamiento/", "GET", null, true);
    return response;
  };

  // Obtener equipamiento por ID
  const getEquipamientoById = async (id) => {
    const response = await doRequest(`equipamiento/${id}`, "GET", null, true);
    return response;
  };

  // Crear nuevo equipamiento
  const createEquipamiento = async (equipamiento) => {
    const response = await doRequest("equipamiento/", "POST", equipamiento, true);
    return response;
  };

  // Actualizar un equipamiento existente
  const updateEquipamiento = async (equipamiento) => {
    const response = await doRequest("equipamiento/", "PUT", equipamiento, true);
    return response;
  };

  // Eliminar equipamiento por ID
  const deleteEquipamiento = async (id) => {
    const response = await doRequest(`equipamiento/${id}`, "DELETE", null, true);
    return response;
  };

  return {
    getEquipamiento,
    getEquipamientoById,
    createEquipamiento,
    updateEquipamiento,
    deleteEquipamiento,
  };
};

export default EquipamientoService;
