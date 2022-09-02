
const { ApiError } = require('src/errors')

const { getUF } = require('src/utils')

const retrieveUF = (req, res, next) => {
  try {
    const { quantity } = req.params
    const UF = getUF()
    const result = quantity / UF ;
    res.status(200).json({ UF: result })
  } catch (error) {
    next(ApiError.badRequest(error.message))
  }
}

module.exports = retrieveUF