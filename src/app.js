import express from 'express';
import config from './config.js';
import morgan from 'morgan';
//import swaggerUi from 'swagger-ui-express'
//import swaggerFile from '../swagger_output.json'
import systemRoutes from './routes/systemRoutes.js';
import rolRoutes from './routes/rolRoutes.js';
import logRoutes from './routes/logRoutes.js';
import userRoutes from './routes/userRoutes.js';
import actionRoutes from './routes/actionRoutes.js';

import cors from 'cors'
const app = express()

app.use(express.json())
app.use(morgan('dev'));

app.set('port', config.port)
app.use(cors())

app.use('/api/systems', systemRoutes)
app.use('/api/roles', rolRoutes)
app.use('/api/logs', logRoutes)
app.use('/api/users', userRoutes)
app.use('/api/actions', actionRoutes)
//app.use('/api/actions', actionRoutes)

//app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))

export default app