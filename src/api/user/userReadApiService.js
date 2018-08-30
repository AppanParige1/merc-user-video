import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';

const url = config.api.userApiUrl;

export const getAllUsers =() => {
    return readProxy(url);
};

export const getUserDetails =(userId) => {
    readProxy(url+userId);
};