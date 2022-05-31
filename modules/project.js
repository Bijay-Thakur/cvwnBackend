const { db } = require('../utils/db');

exports.createProject= (req, res, next) => {
    console.log(req.files)
    const image = req.files[0].filename;
    const { heading, body } = req.body;
    let sql = `INSERT INTO project SET ?`
    let data = {heading: heading, body: body, image: image }
    db.query(sql, data, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "project added"
        })
    })
}

exports.updateProject = (req, res, next) => {
    let image;
    if (req.files[0]) {
        image = req.files[0].filename
    }
    else {
        image = req.body.filename
    }
    const {  heading,  body } = req.body;
    const sql = `UPDATE project SET heading = ?, body = ?, image = ?  WHERE id =?`;

    db.query(sql, [ heading,  body, image], (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "project updated",
        })
    })
}

exports.deleteProject = (req, res, next) => {
    const { id } = req.body;
    const sql = `DELETE FROM project WHERE id = '${id}'`;

    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "project deleted",
        })
    })

}

exports.getProject = (req, res, next) => {
    let sql = `SELECT * FROM project`;
    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "project fetched",
            data: result
        })
    })
}