const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connection = require('./config/db/db.js');

const routers = ['student', 'class'];

routers.map(router => {
  return (
    app.get(`/${router}`, (req, res) => {
      const sql = `SELECT * FROM ${router}`;
      connection.query(sql, function (err, results) {
        if (err) throw err;
        res.json({ router: results });
      });
    })
  );
});


//* student
// app.get('/student', (req, res) => {
//   const sql = `SELECT * FROM student`;
//   connection.query(sql, function (err, results) {
//     if (err) throw err;
//     res.json({ router: results });
//   });
// });


app.post('/student', (req, res) => {
  const { studentId, fullName, photo, email } = req.body;
  const query = `INSERT INTO student (studentId, fullName, photo, email) 
  VALUES (?, ?, ?, ?);`;

  connection.query(query, [studentId, fullName, photo, email],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});

app.delete('/student/delete/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM student WHERE studentId = ?`;

  connection.query(query, [id],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});

app.patch('/student/update/:id', (req, res) => {
  const { studentId, fullName, photo, email } = req.body;
  const query = 'UPDATE student SET '
    + "studentId='" + studentId + "',"
    + "fullName='" + fullName + "',"
    + "photo='" + photo + "',"
    + "email='" + email + "'"
    + "WHERE studentId='" + studentId + "'";

  connection.query(query, [studentId, fullName, photo, email],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});

//* ----------------------------------------------------------------------------------------------------------

//* checkin
app.get('/checkin', (req, res) => {
  const sql = `SELECT * FROM student a, checkin b
    where a.studentId = b.studentId`;
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ router: results });
  });
});



app.post('/checkin', (req, res) => {
  const { studentId, classId, subjectsName, photo, location } = req.body;
  const query =
    `INSERT INTO checkin (studentId, classId, subjectsName, photo, location) 
  VALUES (?, ?, ?, ?, ?);`;

  connection.query(query, [studentId, classId, subjectsName, photo, location],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});


app.delete('/checkin/delete/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM checkin WHERE id = ?`;

  connection.query(query, [id],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});

app.patch('/checkin/update/:id', (req, res) => {
  const { id, studentId, classId, subjectsName, photo, location } = req.body;
  const query = 'UPDATE checkin SET '
    + "id='" + id + "',"
    + "studentId='" + studentId + "',"
    + "classId='" + classId + "',"
    + "subjectsName='" + subjectsName + "',"
    + "photo='" + photo + "',"
    + "location='" + location + "'"
    + "WHERE id='" + id + "'";

  connection.query(query, [id, studentId, classId, subjectsName, photo, location],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});




//* ----------------------------------------------------------------------------------------------------------

//* Class

// app.get('/class', (req, res) => {
//   const sql = `SELECT * FROM class`;
//   connection.query(sql, function (err, results) {
//     if (err) throw err;
//     res.json({ router: results });
//   });
// });

app.post('/class', (req, res) => {
  const { classId, className, } = req.body;
  const query =
    `INSERT INTO class (classId, className) VALUES (?, ?);`;

  connection.query(query, [classId, className],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});


app.delete('/class/delete/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM class WHERE classId = ?`;

  connection.query(query, [id],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});

app.patch('/class/update/:id', (req, res) => {
  const { classId, className } = req.body;
  const query = 'UPDATE class SET '
    // + "classId='" + classId + "',"
    + "className='" + className + "'"
    + "WHERE classId='" + classId + "'";

  connection.query(query, [classId, className],
    function (err, result) {
      if (err) throw err;
      res.json({ router: result });
    })
});




const port = 4001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})