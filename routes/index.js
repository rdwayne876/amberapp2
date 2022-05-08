const express = require('express')
const conn = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
    conn.query('SELECT * FROM amberapp2.projects;', (err, results)=> {
        if(!err)
            res.render('pages/index', {projects: results})
    })
})

router.get('/addProject', (req, res) => {
    res.render('pages/add_project')
})

router.post('/addProject', (req, res) => {
    const data = {
        project_title: req.body.project_name,
        project_description: req.body.project_description,
        project_start_dt: req.body.start_date,
        project_due_dt: req.body.due_date 
    }

    conn.query('INSERT INTO projects SET ?', data, (err, results) => {
        if (err) throw err

        res.redirect('/');
    })
})

function success(response, data = [], message = 'success', status = 200) {
	response.send({ status, message, data })
}

function error(response, message = 'error', status = 500, data = []) {
	response.send({ status, message, data })
}

module.exports = router