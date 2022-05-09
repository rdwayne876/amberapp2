const express = require('express')
const conn = require('../db')
const router = express.Router()

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    if( id== NaN) error( res, 'Invalid ID', 422)

    conn.query(`SELECT n.note, n.date
                FROM projects p, notes n
                WHERE n.project_id = p.id
                AND n.project_id = '${id}';`, (err, results) => {
        console.log(results)
        if (!err) 
            res.render('pages/project_notes', {notes: results})
    })
})

function success(response, data = [], message = 'success', status = 200) {
	response.send({ status, message, data })
}

function error(response, message = 'error', status = 500, data = []) {
	response.send({ status, message, data })
}

module.exports = router