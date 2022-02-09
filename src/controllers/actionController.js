import { getConnection } from '../db/autenticationDB.js';
export const getActions = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('SELECT * FROM ACTIONS')
    res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const getAction = async (req, res) => {
  const actionid = req.params.actionID;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`SELECT * FROM ACTIONS WHERE actionID = ${actionid}`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    } else {
      res.status(200).json({message: 'Consulta exitosa.', result: 'No se encontraron coincidencias.'})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const postAction = async (req, res) => {
  const name = req.params.name
  const description = req.params.description
  const estatus = req.params.status
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`INSERT INTO ACTIONS (nombreaccion, descripcion, estatus) VALUES(${name}, ${description}, ${estatus})`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const setAction = async (req, res) => {
  const actionid = req.params.id
  const nombreaccion = req.params.nombreaccion
  const description = req.params.description
  const estatus = req.params.status
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`UPDATE ACTIONS SET nombreaccion = '${nombreaccion}', descripcion = '${description}', estatus = '${estatus}' 
            WHERE actionID= ${actionid})`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}