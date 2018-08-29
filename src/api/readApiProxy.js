import { getResponseJson } from './baseApiProxy';

export const readProxy = (url) => {
    var options = {
        method: 'GET'
    };
    return getResponseJson(url, options);
};