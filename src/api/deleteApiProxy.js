import { getResponseJson } from './baseApiProxy';

export const deleteProxy = (url, bodyAsJson) => {
    var options = {
        method: 'DELETE'
    };
    return getResponseJson(url, options);
};