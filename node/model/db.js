import mysql from "mysql";


const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "myweb",
  password: "passmyweb",
  database: "myweb",
});

const select = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("Có lỗi xảy ra");
        reject(err);
      } else {
        connection.query(sql, (error, results, fields) => {
          connection.release();
          if (error) {
            console.log("Có lỗi xảy ra");
            reject(error);
          } else {
            let data = {
              error: error,
              results: results,
              fields: fields,
            };
            resolve(results);
          }
        });
      }
    });
  });
};


const query = async (sql) => {
  try {
    const data = await select(sql);
    return data[0];
  } catch (error) {
    console.log("Có lỗi xảy ra");
    return false;
  }
};

const db = {
  select,
  query,
};

export default db;
