const cmsURL = 'https://ia-cms.herokuapp.com/';
const ssoURL = 'https://singlesignonbackend.herokuapp.com/api/users/';
const paqURL = 'https://suscripciones-backend.herokuapp.com/api/'

//----------CMS DE VIDEO----------------------------------------------------

//Endpoints de Peliculas
export const allMovies = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : data
        },
    }
    try {
        const response = await fetch(cmsURL+'api/v1/public/mobile',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//--------------------------------------------------------------------------

//----------SSO - LOGIN / REGISTER------------------------------------------

export const loginSSO = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(ssoURL+'login',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const registroSSO = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(ssoURL+'register',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//--------------------------------------------------------------------------

//----------PAQUETES Y SUBSCRIPCIONES---------------------------------------

//Paquetes------
export const allPaquetes = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-key' : '4X2jHmW75y4dHhTaFy8PEznDB3T99K2K'
        },
    }
    try {
        const response = await fetch(paqURL+'packages/v1/list',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
//Fin Paquetes--

//Subscripciones----
export const createSubscription = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(paqURL+'subscriptions/v1/create',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Fin Subscripciones---



//--------------------------------------------------------------------------

