const axios = require('axios')

const getCLP = async () => {
    const request = await axios.get(process.env.API_DIVISAS)
    return request.divisas.clp
}

module.exports = getCLP