import { getConnection } from '../db/autenticationDB.js';

export const getSystems = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('Select * from SYSTEMS')
    res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
  
}

export const getSystem = async (req, res) => {
  const id = req.params.systemID;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`SELECT * FROM SYSTEMS WHERE systemID = ${id}`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    } else {
      res.status(200).json({message: 'Consulta exitosa.', result: 'No se encontraron coincidencias.'})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const setSystem = async (req, res) => {
  const id = req.params.systemID;
  const name = req.params.name;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`UPDATE SYSTEMS SET NOMBRESISTEMA = ${name} WHERE SYSTEMID = ${id}`)
    res.status(200).json({message: 'Consulta exitosa.', result:'Se ha realizado la actualizacion correctamente.'})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const postSystem = async (req, res) => {
  const name = req.params.nameSystem
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`INSERT INTO SYSTEMS (nombresistema) VALUES('${name}')`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}