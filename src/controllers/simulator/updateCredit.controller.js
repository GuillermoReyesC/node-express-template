const { ApiError } = require('src/errors')

const { CreditRequest } = require('src/models')
const { formatCLP, paymentPlan } = require('src/utils')
const { getUF } = require('src/utils')

const updateCredit = async (req, res, next) => {
  try {
    const { id } = req.params
    const { dues } = req.body
    const ufValue = await getUF()
    const updateCredit = await CreditRequest.update(
      {
        dues,
      },
      { where: { id }, returning: true, plain: true },
    )
    if (updateCredit) {
      res.status(200).json({
        credit: updateCredit[1],
        clp: formatCLP(ufValue * updateCredit[1].uf),
        duesValue: formatCLP((ufValue * updateCredit[1].uf) / dues),
        payment_plan: paymentPlan(updateCredit[1].date, dues),
      })
    } else {
      res.status(200).json({ message: 'credit not found' })
    }
  } catch (error) {
    next(ApiError.badRequest(error))
  }
}

module.exports = updateCredit
