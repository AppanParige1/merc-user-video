import { getResponseJson } from './baseApiProxy';

export const readProxy = (url) => {
    debugger;
    var options = {
        method: 'GET'
    };
    return getResponseJson(url, options);
};