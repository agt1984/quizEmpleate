const API_URL =
  "https://empleatecontalentobackend-production.up.railway.app/api";

export const postCVQuestion = async (question, answers) => {
  try {
    const response = await axios.post(`${API_URL}/cv`, {
      question,
      answers,
    });
    return response;
  } catch (error) {
    console.log("Error guardando pregunta de CV:", error);
    throw error;
  }
};

export const getAllCVQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/cv`);
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.log("Error al traer preguntas de CV:", error);
    throw error;
  }
};
