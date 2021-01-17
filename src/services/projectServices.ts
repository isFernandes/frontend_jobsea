import api from "./api";

//ROTAS DE PROJETOS
//cria projeto
export const createProject = (newProject: object) => {
    api.post("/projeto/", newProject);
}
//atualiza projetos
export const updateProject = (id: number, newData: object) => {
    api.put(`/projeto/${id}`, { newData });
}
//busca 1 projeto
export const getProject = (id: number) => {
    api.get(`/projeto/${id}`);
}
//deleta projeto
export const deleteProject = (id: number) => {
    api.post(`/projeto/${id}`);
}
//busca todos os projetos
export const getAllProject = () => {
    api.post("/projeto/all");
}