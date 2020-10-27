import axios from 'axios';
import { baseUrl, config, withLogs } from '../core';

const authUrl = `http://${baseUrl}/api/auth/login`;

export interface LoginProps {
    token: string;
}

export const login: (username?: string, password?: string) => Promise<LoginProps> = (username, password) => {
    return withLogs(axios.post(authUrl, { username, password }, config), 'login');
}
