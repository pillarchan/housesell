import axios from 'axios';
import qs from 'qs';
const IP = 'http://127.0.0.1:666';

export const userInfo = params => axios.post(IP + '/users/login', qs.stringify(params));
