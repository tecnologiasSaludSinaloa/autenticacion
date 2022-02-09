import sql from 'mssql';

// export async function getConnection(){
//     //console.log(sqlConfig)
//     try {
//         const pool = await sql.connect('Server=10.0.173.132,1433;Database=almacencd2018;User Id=almacen2018;Password=Alma2k18.;Encrypt=false') 
//         console.log('Conexion a la base de datos SQL exitosa')           
//         return pool
//     } catch (error) {
//         console.log('No se pudo extablecer conexion a la base de datos SQL: ', error)
//     }
// }

export async function getConnection(){
    try {
        // Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true
        // Driver=msnodesqlv8;Server=(local)\INSTANCE;Database=database;UID=DOMAIN\username;PWD=password;Encrypt=true
        const pool = await sql.connect('Server=localhost,1433;Database=autenticacion;User Id=autenticacion;Password=Auth2022.;Encrypt=false') 
        console.log('Conexion a la base de datos SQL exitosa')           
        return pool
    } catch (error) {
        console.log('No se pudo extablecer conexion a la base de datos SQL: ', error)
    }
}
export async function getConnectionRequisiciones(){
    try {
        const pool = await sql.connect('Server=10.0.173.132,1433;Database=RequisicionesActual;User Id=sisrequisiciones;Password=Requi2k20.;Encrypt=false') 
        console.log('Conexion a la base de datos SQL Requisiciones exitosa')           
        return pool
    } catch (error) {
        console.log('No se pudo extablecer conexion a la base de datos SQL: ', error)
    }
}