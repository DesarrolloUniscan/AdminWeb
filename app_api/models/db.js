


const config = {
    user: 'HR1011',
    password: 'Bmet$1011',
    server: '192.168.1.125',
    port: 1433,
    database: 'VerificadorPrecios',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    parseJSON: true,
    dialect: ",ssql",
    dialectOptiond: "SQLEXPRESS"
}
module.exports = config;



