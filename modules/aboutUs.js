const { db } = require('../utils/db');

exports.createAboutUs = (req, res, next) => {
    console.log(req.files)
    const image = req.files[0].filename;
    const { topTitle, heading, subHeading, body } = req.body;
    let sql = `INSERT INTO aboutUs SET ?`
    let data = { topTitle: topTitle, heading: heading, subHeading: subHeading, body: body, image: image }
    db.query(sql, data, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "data added"
        })
    })
}

exports.updateAboutUS = (req, res, next) => {
    let image;
    if (req.files[0]) {
        image = req.files[0].filename
    }
    else {
        image = req.body.filename
    }
    const { topTitle, heading, subHeading, body, date, id } = req.body;
    const sql = `UPDATE aboutUs SET topTitle = ?, subHeading = ?,heading = ?, body = ?, image = ?, date = ?  WHERE id =?`;

    db.query(sql, [topTitle, heading, subHeading, body, image, date, id], (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "Data updated",
        })
    })
}

exports.deleteAboutUs = (req, res, next) => {
    const { id } = req.body;
    const sql = `DELETE FROM aboutUs WHERE id = '${id}'`;

    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "data deleted",
        })
    })

}

exports.getAboutUs = (req, res, next) => {
    let sql = `SELECT * FROM aboutUs`;
    db.query(sql, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
                message: "Database operation failed",
            })
        }
        return res.status(200).json({
            message: "Data fetched",
            data: result
        })
    })
}