import axios, { AxiosResponse } from 'axios';

const notionApi = process.env.NOTION_API;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionKey = process.env.NOTION_KEY;

const goHighLevelApi = process.env.GOHIGHLEVEL_API;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const instance = (api: 'goHighLevel' | 'notion', headers?: any) => {
    let baseURL: string = 'contractor';

    if (api === 'goHighLevel') {
        baseURL = goHighLevelApi;
    } else if (api === 'notion') {
        baseURL = `${notionApi}/v1/databases/${notionDatabaseId}`;
        headers = {
            Authorization: `Bearer ${notionKey}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-02-22',
        };
    } else {
        baseURL = goHighLevelApi;
    }

    const instancia = axios.create({
        baseURL,
        headers: headers ?? {
            'Content-Type': 'application/json',
            version: '2021-07-28',
        },
    });

    instancia.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            console.error(error);
            return Promise.reject(error);
        },
    );

    instancia.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('error response::::', error);
            return Promise.reject(error);
        },
    );

    return instancia;
};
const responseBody = (response: AxiosResponse) =>
    response ? response.data : response;

const handleRequest = async (
    requestFn: () => Promise<any>,
    maxRetries: number = 3,
) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await requestFn();
        } catch (error: any) {
            if (error.response?.status === 429) {
                const retryAfter =
                    parseInt(
                        error.response.headers['x-ratelimit-interval-milliseconds'],
                    ) || 5000;
                // const mensaje = `Intento ${attempt}/${maxRetries}: Rate limit alcanzado. Esperando ${retryAfter}ms antes de reintentar...`
                const mensaje = `Espere ${retryAfter / 1000} segundos, se intentara de nuevo automáticamente.`;
                console.log(mensaje);
                if (attempt < maxRetries) {
                    await delay(retryAfter);
                    continue;
                }
            } else {
                throw error;
            }
        }
    }
};
export const fetchApiNotion = {
    get: (url: string, maxRetries?: number) =>
        handleRequest(
            () => instance('notion').get(url).then(responseBody),
            maxRetries,
        ),

    post: (url: string, body?: any, headers?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('notion', headers).post(url, body).then(responseBody),
            maxRetries,
        ),

    put: (url: string, body?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('notion').put(url, body).then(responseBody),
            maxRetries,
        ),

    patch: (url: string, body?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('notion').patch(url, body).then(responseBody),
            maxRetries,
        ),

    delete: (url: string, maxRetries?: number) =>
        handleRequest(
            () => instance('notion').delete(url).then(responseBody),
            maxRetries,
        ),
};

export const fetchApiGoHighLevel = {
    get: (url: string, maxRetries?: number) =>
        handleRequest(
            () => instance('goHighLevel').get(url).then(responseBody),
            maxRetries,
        ),

    post: (url: string, body?: any, headers?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('goHighLevel', headers).post(url, body).then(responseBody),
            maxRetries,
        ),

    put: (url: string, body?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('goHighLevel').put(url, body).then(responseBody),
            maxRetries,
        ),

    patch: (url: string, body?: any, maxRetries?: number) =>
        handleRequest(
            () => instance('goHighLevel').patch(url, body).then(responseBody),
            maxRetries,
        ),

    delete: (url: string, maxRetries?: number) =>
        handleRequest(
            () => instance('goHighLevel').delete(url).then(responseBody),
            maxRetries,
        ),
};
