import * as mysql from 'mysql2';

export const mysqlConfig = mysql.createPool({
    host: '23.27.51.155',        
    user: 'desarrollo',          
    password: 'DevAng2024*!',   
    database: 'contractor', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});