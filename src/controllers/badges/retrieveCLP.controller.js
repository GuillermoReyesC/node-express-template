
const { ApiError } = require('src/errors')

const { getUF } = require('src/utils')

const retrieveCLP = (req, res, next) => {
  try {
    const { amount } = req.params
    const UF = getUF()
    const result = amount / UF
    res.status(200).json({ UF: result })
  } catch (error) {
    next(ApiError.badRequest(error.message))
  }
}

module.exports = retrieveCLP
