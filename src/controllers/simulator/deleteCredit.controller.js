const { ApiError } = require('src/errors')

const { CreditRequest } = require('src/models')

const deleteCredit = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteCredit = await CreditRequest.destroy({
            where: { id },
        });
        if (deleteCredit) {
            res.status(200).json(credit)
        } else {
            res.status(200).json({ message: "credit not found" })
        }

    } catch (error) {
        next(ApiError.badRequest(error))
    }
}

module.exports = deleteCredit