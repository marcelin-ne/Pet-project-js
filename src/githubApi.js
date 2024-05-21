// import { ValidationError , ConnectionError } from '../errors/errors';
import dotenv from 'dotenv';

import {ConnectionError} from '../errors/errors';
dotenv.config()

const BASEURL= 'https://api.github.com';
const ORG_NAME = 'stackbuilders';
const BASE_URL_ORG = `https://api.github.com/orgs/${ORG_NAME}/repos`;
    export async function testConnection(token) {
    if (!token) {
        console.error('No se ha proporcionado un token de acceso. Configure la variable de entorno GITHUB_TOKEN.');
        return false;
    }

    try {
        const response = await fetch(`${BASEURL}/user`, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        if (response.ok) {
            const userData = await response.json();
            console.log('Conexión exitosa. Bienvenido, ' + userData.login);
            return true;
        } else {
            console.error('Error de conexión:', response.statusText);
            return false;
        }
    } catch (error) {
        if (error instanceof ConnectionError) {
            console.log("Connection Error:", error.message);
        } else {
            console.error('Error fetching repositories:', error.message);
            throw error;
        }
        return false;
    }
}
export async function getRepositories(authToken) {
    try {
        const response = await fetch(BASE_URL_ORG, {
            headers: {
                Authorization: `token ${authToken}`, 
            },
        });
        const data = await response.json();
        console.log(typeof data);
        return data;
    } catch (error) {
        if (error instanceof ConnectionError) {
            console.log("Connection Error:", error.message);
        } else {
            console.error('Error fetching repositories:', error.message);
            throw error;
        }
        return null;
    }
}


