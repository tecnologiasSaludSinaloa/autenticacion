import { getConnection } from '../db/autenticationDB.js';
export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('SELECT * FROM USERS')
    res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const getUser = async (req, res) => {
  const userid = req.params.userID;
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`SELECT * FROM USERS WHERE userID = ${userid}`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    } else {
      res.status(200).json({message: 'Consulta exitosa.', result: 'No se encontraron coincidencias.'})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const postUser = async (req, res) => {
  const {names, pat, mat, CURP, email, personalemail, unit, area, position, password, datepassword, firsttime, status } = req.body
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`INSERT INTO USERS (nombres, paterno, materno, CURP, correo, correopersonal, unidad, area, puesto, contraseña, fechacontraseña, primeravez, estatus) 
    VALUES('${names}', '${pat}', '${mat}', '${CURP}', '${email}', '${personalemail}', '${unit}', '${area}', '${position}', '${password}', '${datepassword}', '${firsttime}', '${status}' )`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}

export const setUser = async (req, res) => {
  const userid = req.params.id
  const {names, pat, mat, CURP, email, personalemail, unit, area, position, password, datepassword, firsttime, status } = req.body
  try {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(`UPDATE USERS SET nombres = '${names}', paterno = '${pat}', materno = '${mat}', CURP = '${CURP}', correo = '${email}', correopersonal = '${personalemail}',
            unidad = '${unit}', area = '${area}', puesto = '${position}', contraseña = '${password}', fechacontraseña = '${datepassword}', primeravez = '${firsttime}', estatus = '${status}' 
            WHERE userID= ${userid})`)
    if (result.recordset.length > 0) {
      res.status(200).json({message: 'Consulta exitosa.', result: result.recordset})
    }
  } catch (error) {
    res.status(400).json({message: 'Ha ocurrido un error y no se ha podido realizar la consulta.', result: error})
  }
}