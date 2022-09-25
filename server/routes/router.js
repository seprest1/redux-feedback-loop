const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ROUTES
router.get('/admin', (req, res) => {
    console.log('GET /admin received a request');
    const queryText = 
        `SELECT * FROM "feedback"
            ORDER BY id DESC;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Something failed in admin GET', error);
            res.sendStatus(500);
        });
});

//flagged words
router.get('/flagged_words', (req, res) => {
    console.log('GET /flaggedwords received a request');
    const queryText = 
        `SELECT * FROM "flagged_words"
            ORDER by id DESC;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Failed to get flagged words', error);
            res.sendStatus(500);
        });
});

//POST ROUTES
router.post('/', (req, res) => {
    console.log('In /feedback POST route');
    console.log(req.body);
    const queryText = 
        `INSERT INTO "feedback"
            (feeling, understanding, support, comments, flagged)
            VALUES
                ($1, $2, $3, $4, $5);`;
    const sqlValues = [req.body.feeling, req.body.understanding, 
        req.body.support, req.body.comments, req.body.flagged];
    pool.query(queryText, sqlValues)
        .then(result => {
            res.sendStatus(201); 
        })
        .catch(error => {
            console.log('Feedback failed to POST', error);
            res.sendStatus(500);
        });
});

//flagged words
router.post('/flagged_words', (req, res) => {
    console.log('In /flaggedwords POST route');
    console.log(req.body);
    const queryText = 
        `INSERT INTO "flagged_words"
            (word, severity)
            VALUES
                ($1, $2);`;
    const sqlValues = [req.body.word, req.body.severity];
    pool.query(queryText, sqlValues)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Flagged word failed in POST', error);
            res.sendStatus(500);
        });
});

//PUT ROUTE
router.put('/:id', (req, res) => {
    console.log(req.params);
    const queryText = 
        `UPDATE "feedback"
            SET flagged=$1
                WHERE id=$2;`;
    const sqlValue = [req.body.flagged, req.params.id];
    pool.query (queryText, sqlValue)
        .then (result => {
            console.log('Flagged feedback, PUT route');
            res.sendStatus(200);
        })
        .catch (error => {
            console.log('Flagged feedback failed, lol:', error);
            res.sendStatus(500);
        });
});

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    console.log(req.params);
    const queryText = 
        `DELETE FROM "feedback"
            WHERE id=$1;`;
    const sqlValue = [req.params.id];
    pool.query (queryText, sqlValue)
        .then (result => {
            console.log('DELETE feedback route');
            res.sendStatus(200);
        })
        .catch (error => {
            console.log('DELETE /feedback failed', error);
            res.sendStatus(500);
        });
});

//flagged words
router.delete('/flagged_words/:id', (req, res) => {
    console.log(req.params);
    const queryText = 
        `DELETE FROM "flagged_words"
            WHERE id=$1;`;
    const sqlValue = [req.params.id];
    pool.query (queryText, sqlValue)
        .then (result => {
            console.log('DELETE /flagged_words route');
            res.sendStatus(200);
        })
        .catch (error => {
            console.log('DELETE /flagged_words failed', error);
            res.sendStatus(500);
        });
})

module.exports = router;