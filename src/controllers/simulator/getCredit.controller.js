const { ApiError } = require('src/errors')

const { User, CreditRequest } = require('src/models')

const getCredit = async (req, res, next) => {
  try {
    const { id } = req.params
    const credit = await CreditRequest.findOne({ 
      where: { id },
      include: [{ model: User }],
    });
    if(credit){
      res.status(200).json(credit)
    } else {
      res.status(200).json({ message: "credit not fount"})
    }
    
  } catch (error) {
    next(ApiError.badRequest(error))
  }
}

module.exports = getCredit
