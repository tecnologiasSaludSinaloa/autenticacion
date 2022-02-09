import {config} from 'dotenv'
config();

export default {
    port: process.env.Port || 3130,
    SECRET: 'constancias-api'
}