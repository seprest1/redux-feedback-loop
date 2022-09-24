const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log('In /feedback POST route');
    console.log(req.body);
    const queryText = 
        `INSERT INTO "feedback"
            (feeling, understanding, support, comments)
            VALUES
            ($1, $2, $3, $4);`;
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryText, sqlValues)
        .then(result => {
            res.sendStatus(201); 
        })
        .catch(error => {
            console.log('Feedback failed to POST', error);
            res.sendStatus(500);
        })
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});