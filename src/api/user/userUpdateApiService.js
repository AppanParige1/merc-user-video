import config from '../../config/config.json';
import { updateProxy } from '../updateApiProxy';

const url = config.api.userUpdateApiUrl;

export const updateUser = (userId, userDetails) => updateProxy(url+userId, userDetails);
