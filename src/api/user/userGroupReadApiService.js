import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';

const url = config.userGourpApiUrl;

export const getAllUserGroups =() => {
    readProxy(url);
};