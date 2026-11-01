import axios from "axios";

// Conexão com a MockAPI (mesmo padrão do contactsApi da aula)
const cenasApi = axios.create({
  baseURL: "https://6abc415cb2118ed7abb9a781.mockapi.io/",
  timeout: 10000, // 10 segundos (API online pode ser mais lenta)
  headers: {
    "Content-Type": "application/json",
  },
});

// Cada cena traz: imagem, modo sugerido, detecções, confiança e (se for estudo) o resumo
export const buscarCenas = async () => {
  const resposta = await cenasApi.get("cenas");
  return resposta.data;
};

export default cenasApi;
