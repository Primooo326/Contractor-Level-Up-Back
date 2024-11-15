import { mysqlConfig } from './mysql.config';  // Ajusta la ruta según donde esté tu archivo de configuración

export async function testMySQLConnection() {
    try {
        const [rows] = await mysqlConfig.promise().query('SELECT 1 + 1 AS result');
        console.log('Conexión exitosa a la base de datos MySQL');
        console.log('Resultado de la consulta de prueba:', rows[0].result); // Debería imprimir "2"
    } catch (error) {
        console.error('Error al conectar a MySQL:', error);
    }
}

// Llamamos a la función para probar la conexión
testMySQLConnection();
