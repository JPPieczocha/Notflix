import { allMovies } from "../services/Apiroutes";

export const getAllMovies = async (data)=>{
    const response = await allMovies(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Codigo de respuesta en getAllMovies: ' + response.status);
        return response.status
    }
}