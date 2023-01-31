const { check } = require('express-validator');
const validateResults = require('../utils/useValidators')


const validatorCreateItem = [
    check("name")
        .exists() //exista
        .notEmpty(), // no vacio
    check("album")
        .exists() //exista
        .notEmpty(), // no vacio
    check("cover")
        .exists() //exista
        .notEmpty(), // no vacio
    check("artist")
        .exists() //exista
        .notEmpty(), // no vacio
    check("artist.name")
        .exists() //exista
        .notEmpty(), // no vacio
    check("artist.nickname")
        .exists() //exista
        .notEmpty(), // no vacio
    check("artist.nationality")
        .exists() //exista
        .notEmpty(), // no vacio
    check("duration")
        .exists() //exista
        .notEmpty(), // no vacio
    check("duration.start")
        .exists() //exista
        .notEmpty(), // no vacio
    check("duration.end")
        .exists() //exista
        .notEmpty(), // no vacio
    check("mediaId")
        .exists() //exista
        .notEmpty() // no vacio
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check("id")
        .exists() //exista
        .notEmpty() // no vacio
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
module.exports = { validatorCreateItem, validatorGetItem }