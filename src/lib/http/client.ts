import Axios, { type InternalAxiosRequestConfig } from "axios";

import { env } from "@/env/server";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = "application/json";

        const language = "en";
        config.headers["Accept-Language"] = language;
    }

    config.withCredentials = true;
    return config;
}

export const api = Axios.create({ baseURL: env.API_URL });

api.interceptors.request.use(authRequestInterceptor);
