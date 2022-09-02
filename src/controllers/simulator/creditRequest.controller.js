const { ApiError } = require('src/errors')

const { User, CreditRequest } = require('src/models')
const { formatCLP, paymentPlan } = require('src/utils')
const { getUF } = require('src/utils')

const creditRequest = async (req, res, next) => {
  try {
    const { uf, dues, date } = req.body
    const ufValue = await getUF()
    const [user, _] = await User.findOrCreate({
      where: { ...req.body.user },
    })
    const creditCreated = await CreditRequest.create({
      fk_user_id: user.id,
      uf: uf,
      dues: dues,
      date: date,
    })
    res.status(200).json({
      identifier: creditCreated.id,
      uf: uf,
      clp: formatCLP(ufValue * uf),
      duesValue: formatCLP((ufValue * uf) / dues),
      payment_plan: paymentPlan(date, dues)
    })
  } catch (error) {
    next(ApiError.badRequest(error))
  }
}

module.exports = creditRequest
