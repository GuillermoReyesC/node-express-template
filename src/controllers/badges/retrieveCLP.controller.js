
const { ApiError } = require('src/errors')

const { getUF } = require('src/utils')

const retrieveCLP = async (req, res, next) => {
  try {
    const { quantity } = req.params
    const UF = await getUF()
    const result = quantity * UF
    res.status(200).json({ CLP: result })
  } catch (error) {
    next(ApiError.badRequest(error.message))
  }
}

module.exports = retrieveCLP
