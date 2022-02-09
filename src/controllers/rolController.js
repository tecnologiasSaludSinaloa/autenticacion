import { getConnection } from '../db/autenticationDB.js';

export const getRoles = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('SELECT * FROM ROLES')
    res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const getRol = async (req, res) => {
  const id = req.params.rolID;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`SELECT * FROM ROLES WHERE rolID = ${id}`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    } else {
      res.status(200).json({message: 'Consulta exitosa.', result: 'No se encontraron coincidencias.'})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const setRol = async (req, res) => {
  const id = req.params.rolID;
  const name = req.params.nombreRol;
  const status = req.params.estatus;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`UPDATE ROLES SET nombrerol = ${name}, status = ${status} WHERE rolID = ${id}`)
    res.status(200).json({message: 'Consulta exitosa.', result:'Se ha realizado la actualizacion correctamente.'})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const postRol = async (req, res) => {
  const name = req.params.nombreRol
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`INSERT INTO ROLES (nombrerol, estatus) VALUES('${name}', 'A')`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}