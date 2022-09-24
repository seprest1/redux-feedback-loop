const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ROUTE
router.get('/admin', (req, res) => {
    console.log('In /admin GET route');
    const queryText = 
        `SELECT * FROM "feedback"
            ORDER BY date`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Something failed in admin GET', error);
            res.sendStatus(500);
        });
});

//POST ROUTE
router.post('/', (req, res) => {
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

//DELETE ROUTE
router.delete('/delete/:id', (req, res) => {
    console.log('DELETE feedback route');
    console.log(req.params);
    const queryText = 
        `DELETE FROM "feedback"
            WHERE id=$1;`;
    const sqlValue = [req.params.id];
    pool.query (queryText, sqlValue)
        .then (result => {
            res.sendStatus(200);
        })
        .catch (error => {
            console.log('DELETE /id failed', error);
            res.sendStatus(500);
        });
});

module.exports = router;