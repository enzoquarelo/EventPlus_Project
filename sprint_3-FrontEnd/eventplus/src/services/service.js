import axios from "axios";

/**
 * route to Event
 */
export const eventsResource = '/Evento'
/**
 * route to nextEvents
 */
export const nextEventssResource = '/Evento/ListarProximos'
/**
 * route to eventTypes
 */
export const eventsTypeResource = '/TiposEvento'

const portAPI = "7118";
const localApiUrl = `https://localhost:${portAPI}/api`;
const externalApiUrl = null;

const api = axios.create({
    baseURL: localApiUrl
});

export default api;