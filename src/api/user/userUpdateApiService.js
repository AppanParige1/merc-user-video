import config from '../../config/config.json';
import { updateProxy } from '../updateApiProxy';

const url = config.userApiUrl;

export const updateUser = (userId, userDetails) => updateProxy(url+userId, userDetails);
