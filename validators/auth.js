const { check } = require('express-validator')
const validateResults = require('../utils/useValidators')

const validateRegister = [
    check("name")
        .exists() //exista
        .notEmpty() // no vacio
        .isLength({ min: 3, max: 99 }),
    check("age")
        .exists() //exista
        .notEmpty() // no vacio
        .isNumeric(),
    check("password")
        .exists() //exista
        .notEmpty() // no vacio
        .isLength({ min: 3, max: 15 }),
    check("email")
        .exists() //exista
        .notEmpty() // no vacio
        .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]


const validatorLogin = [
    check("password")
        .exists() //exista
        .notEmpty() // no vacio
        .isLength({ min: 3, max: 15 }),
    check("email")
        .exists() //exista
        .notEmpty() // no vacio
        .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validateRegister, validatorLogin }