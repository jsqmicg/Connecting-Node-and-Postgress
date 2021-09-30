const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "underpressure94",
  database: "library",
};

const pool = new Pool(config);

const getBooks = async () => {
  try {
    const res = await pool.query("select * from books");
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const getUsers = async () => {
  try {
    const res = await pool.query("select * from users");
    console.log(res.rows);
  } catch (err) {
    console.log(err.message);
  }
};

// const insertUser = async () => {
//   try {
//     const text = "INSERT INTO users(username, password) VALUES ($1, $2)";
//     const values = ["pelaoska8", "94012003425"];
//     const res = await pool.query(text, values);
//     console.log(res);
//   } catch (err) {
//     console.log(err.message)
//   }
// };

// const deleteUser = async () => {
//   try {
//     const text = "DELETE FROM users WHERE username = $1";
//     const value = ["pelaoska8"];
//     const res = await pool.query(text, value);
//     console.log(res);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// const updateUser = async () => {
//   try {
//     const text = "UPDATE users SET username = $1 WHERE username = $2";
//     const value = ["quericopuertorico", "basstian94"];
//     const res = await pool.query(text, value);
//     console.log(res);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

//getBooks();
//updateUser();
//insertUser();
//deleteUser();
getUsers();
