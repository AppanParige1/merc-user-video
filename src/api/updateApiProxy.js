import { getResponseJson } from './baseApiProxy';

    export const updateProxy = (url, bodyAsJson) => {
        var options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyAsJson)
        };
        debugger;
        return getResponseJson(url, options);
    };