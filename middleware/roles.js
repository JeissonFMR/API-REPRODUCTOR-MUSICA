const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req
        console.log(user);

        const rolesByUser = user.role; //TODO:["user"]

        const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) //TODO: TRUE OR FALSE
        if (!checkValueRole) {
            res.status(403).send('USER_NOT_PERMISSIONS')
            return;
        }
        next()
    } catch (error) {
        res.status(403).send('ERROR_PERMISSIONS')
    }
}

module.exports = { checkRole }