const { db } = require('../utils/db');

exports.createEvent= (req, res, next) => {
    console.log(req.files)
    const image = req.files[0].filename;
    const { heading, body } = req.body;
    let sql = `INSERT INTO event SET ?`
    let data = {heading: heading, body: body, image: image }
    db.query(sql, data, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "event added"
        })
    })
}

exports.updateEvent = (req, res, next) => {
    let image;
    if (req.files[0]) {
        image = req.files[0].filename
    }
    else {
        image = req.body.filename
    }
    const {  heading,  body } = req.body;
    const sql = `UPDATE event SET heading = ?, body = ?, image = ?  WHERE id =?`;

    db.query(sql, [ heading,  body, image], (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "event updated",
        })
    })
}

exports.deleteEvent = (req, res, next) => {
    const { id } = req.body;
    const sql = `DELETE FROM event WHERE id = '${id}'`;

    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "event deleted",
        })
    })

}

exports.getEvent = (req, res, next) => {
    let sql = `SELECT * FROM event`;
    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "event fetched",
            data: result
        })
    })
}