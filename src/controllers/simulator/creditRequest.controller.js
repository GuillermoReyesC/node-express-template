const { ApiError } = require('src/errors')

const creditRequest = (req, res, next) => {
  try {
    res.status(200).json(req.body)
  } catch (error) {
    next(ApiError.badRequest('algo malo paso'))
  }
}

module.exports = creditRequest
