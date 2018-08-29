import { getResponseJson } from './baseApiProxy';

    export const updateProxy = (url, bodyAsJson) => {
        var options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyAsJson)
        };
        return getResponseJson(url, options);
    };