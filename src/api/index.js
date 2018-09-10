import axios from 'axios';

import { apiPrefix } from '../config/config.json';

export default {
    gameAll() {
        return axios.get(`${apiPrefix}/games`)
    },

    gameWin() {
        return axios.get(`${apiPrefix}/wingames`)
    },

    createGame() {
        return axios.post(`${apiPrefix}/game`, true)
    },

    createWinGame() {
        return axios.post(`${apiPrefix}/wingame`, true)
    }
}