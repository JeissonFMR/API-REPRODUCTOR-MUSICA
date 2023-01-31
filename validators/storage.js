const { check } = require('express-validator')
const validateResults = require('../utils/useValidators')

const validatorGetStorage = [
    check('id')
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorGetStorage }