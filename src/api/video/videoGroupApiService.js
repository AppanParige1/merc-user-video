import config from '../../config/config.json';
import { readProxy } from '../readApiProxy';


const url = config.videoGroupApiUrl;

export const getAllVideoGroups =() => {
    readProxy(url);
};