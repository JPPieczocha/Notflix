import {
    allPaquetes,
    createSubscription,
    canPlayMovie,
} from "../services/Apiroutes";

/**
 *
 * @description Trae todos paquetes sin la necesidad de un JWT
 * @returns
 */
export const getAllPaquetes = async () => {
    const response = await allPaquetes();
    if (response.status === 200) {
        const json = await response.json();
        return json;
    } else {
        console.log("ERROR en getAllPaquetes");
        console.log("Codigo devuelto por getAllPaquetes: " + response.status);
        return response.status;
    }
};

export const crearSubscription = async (data) => {
    const response = await createSubscription(data);
    if (response.status === 201) {
        const json = await response.json();
        return json;
    } else {
        console.log("ERROR en createSub");
        console.log("Codigo devuelto por createSub: " + response.status);
        return response.status;
    }
};

export const checkPlayMovie = async (token, data) => {
    const response = await canPlayMovie(token, data);
    if (response.status === 200) {
        const json = await response.json();
        return json;
    } else {
        console.log("Codigo devuelto por checkPlayMovie: " + response.status);
        return response.status;
    }
};
