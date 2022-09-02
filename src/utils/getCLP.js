const axios = require('axios')

const getCLP = async () => {
    const request = await axios.get(process.env.API_DIVISAS_UF)
    return request.divisas.uf
}

module.exports = getCLP