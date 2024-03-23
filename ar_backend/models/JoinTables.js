const connection = require('../database.js');

const JoinTables = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT A.Cardate, A.VIN, B.SaveDate
            FROM rRecvOrd A WITH (NOLOCK)
            LEFT OUTER JOIN rRecvOrdPart B ON A.cardate = B.Cardate
            LIMIT 10;
        `;
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = JoinTables;