import { getResponseJson } from './baseApiProxy';

export const addProxy = (url, bodyAsJson) => {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyAsJson)
    };
    return getResponseJson(url, options);
};
