const express = require('express');
const app = express();
const mysql = require('mysql2'); //* mysql ei toiminut
const cors = require('cors')

app.use(cors());
app.use(express.json())

//* connection
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'reviewsystem',
});

//* sending to DB
app.post('/create', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const review = req.body.review

    db.query(
        "INSERT INTO reviews (name, email, review) VALUES (?,?,?)", 
        [name, email, review], 
        
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send('Insterted succesfully!')
            }
        });
});

//* sending to FE
app.get('/reviews', (req, res) => {
    db.query("SELECT * FROM reviews", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



//* testing
app.listen(3001, ()=> {
    console.log('running on port 3001')
})