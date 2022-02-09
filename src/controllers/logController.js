import { getConnection } from '../db/autenticationDB.js';
import moment from 'moment'
export const getLogs = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('SELECT * FROM LOGS')
    res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const getLog = async (req, res) => {
  const id = req.params.userID;
  const systemid = req.params.systemID;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`SELECT * FROM LOGS WHERE userID = ${id} and systemID = ${systemid}`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    } else {
      res.status(200).json({message: 'Consulta exitosa.', result: 'No se encontraron coincidencias.'})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const postLog = async (req, res) => {
  const userid = req.params.userID
  const systemid = req.params.systemID
  const date = moment().format('YYYYMMDD')
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`INSERT INTO LOGS (userID, systemID, fecha) VALUES(${userid}, ${systemid}, ${date})`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}